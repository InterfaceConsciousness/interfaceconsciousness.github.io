(function() {
    // Configuration
    const CORRECT_HASH = '816ec678fa76c26abbc09f45b84fe1bfc0fde4b7cbdd69cd4485b461dcf2e279';
    const COOKIE_NAME = 'site_access';
    const PROTECTED_CONTENT_ID = 'protected-content';

    // Hide content immediately on execution
    document.documentElement.style.visibility = 'hidden';
    const protectedContent = document.getElementById(PROTECTED_CONTENT_ID);
    if (protectedContent) protectedContent.style.display = 'none';

    function checkAuth() {
        return document.cookie.includes(`${COOKIE_NAME}=true`);
    }

    function grantAccess() {
        document.documentElement.style.visibility = 'visible';
        if (protectedContent) protectedContent.style.display = 'block';
        document.body.classList.add('unlocked');
    }

    function authenticate() {
        const password = prompt('Enter site password:');
        if (password && sha256(password) === CORRECT_HASH) {
            document.cookie = `${COOKIE_NAME}=true; max-age=86400; path=/; SameSite=Strict`;
            grantAccess();
        } else {
            // Clear existing content and block access
            document.documentElement.innerHTML = `
                <style>
                    body { 
                        padding: 2rem;
                        text-align: center;
                        font-family: sans-serif;
                    }
                </style>
                <h1>Access Denied</h1>
                <p>Invalid password. Refresh to try again.</p>
            `;
        }
    }

    // Initial check
    checkAuth() ? grantAccess() : authenticate();
})();