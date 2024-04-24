function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const toggleLink = document.querySelector('.toggle-form a');
    const formTitle = document.getElementById('form-title');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        toggleLink.textContent = 'New to JDM Cars? Sign up here';
        formTitle.textContent = 'Login';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        toggleLink.textContent = 'Already have an account? Login here';
        formTitle.textContent = 'Sign Up';
    }
}

AWS.config.region = 'us-east-1'; // Specify your AWS region
const poolData = {
    UserPoolId: 'us-east-1_OH7w0M2xo',
    ClientId: '1nm0gc9gh4jpp0i9fvn59638gh'
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const authenticationData = {
        Username: email,
        Password: password
    };
    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    const userData = {
        Username: email,
        Pool: userPool
    };
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function(result) {
            // Redirect user to the dashboard or desired page
            window.location.href = 'dashboard.html';
        },
        onFailure: function(err) {
            alert('Login failed. Please check your credentials.');
            console.error(err);
        }
    });
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Similar logic as login for user registration
});