
        document.addEventListener('DOMContentLoaded', function() {
            // Gestion des pages
            const homePage = document.getElementById('homePage');
            const loginPage = document.getElementById('loginPage');
            const registerPage = document.getElementById('registerPage');
            
            // Boutons de navigation
            const homeLoginBtn = document.getElementById('homeLoginBtn');
            const homeRegisterBtn = document.getElementById('homeRegisterBtn');
            const goToLogin = document.getElementById('goToLogin');
            const goToRegister = document.getElementById('goToRegister');
            const navHome = document.getElementById('navHome');
            const navLogin = document.getElementById('navLogin');
            const navRegister = document.getElementById('navRegister');
            
            // Fonction pour changer de page
            function navigateTo(page) {
                homePage.classList.remove('active');
                loginPage.classList.remove('active');
                registerPage.classList.remove('active');
                
                if (page === 'home') {
                    homePage.classList.add('active');
                } else if (page === 'login') {
                    loginPage.classList.add('active');
                } else if (page === 'register') {
                    registerPage.classList.add('active');
                }
            }
            
            // Événements de navigation
            homeLoginBtn.addEventListener('click', () => navigateTo('login'));
            homeRegisterBtn.addEventListener('click', () => navigateTo('register'));
            goToLogin.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo('login');
            });
            goToRegister.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo('register');
            });
            navHome.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo('home');
            });
            navLogin.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo('login');
            });
            navRegister.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo('register');
            });
            
            // Gestion du thème clair/sombre
            const themeToggle = document.getElementById('themeToggle');
            const body = document.body;
            const navbar = document.querySelector('.navbar');
            
            themeToggle.addEventListener('click', function() {
                if (body.classList.contains('dark-mode')) {
                    body.classList.remove('dark-mode');
                    body.classList.add('light-mode');
                    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                    navbar.classList.remove('navbar-dark', 'bg-dark');
                    navbar.classList.add('navbar-light', 'bg-light');
                } else {
                    body.classList.remove('light-mode');
                    body.classList.add('dark-mode');
                    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                    navbar.classList.remove('navbar-light', 'bg-light');
                    navbar.classList.add('navbar-dark', 'bg-dark');
                }
            });
            
            // Gestion de la visibilité du mot de passe
            document.querySelectorAll('.toggle-password').forEach(button => {
                button.addEventListener('click', function() {
                    const input = this.previousElementSibling;
                    const icon = this.querySelector('i');
                    
                    if (input.type === 'password') {
                        input.type = 'text';
                        icon.classList.remove('fa-eye');
                        icon.classList.add('fa-eye-slash');
                    } else {
                        input.type = 'password';
                        icon.classList.remove('fa-eye-slash');
                        icon.classList.add('fa-eye');
                    }
                });
            });
            
            // Validation du formulaire de connexion
            document.getElementById('loginForm').addEventListener('submit', function(e) {
                e.preventDefault();
                const email = document.getElementById('loginEmail').value;
                const password = document.getElementById('loginPassword').value;
                
                // Ici, vous pourriez ajouter une vérification supplémentaire ou envoyer à un serveur
                alert(`Connexion réussie pour ${email}`);
            });
            
            // Vérification de la force du mot de passe
            const registerPassword = document.getElementById('registerPassword');
            const passwordStrength = document.getElementById('passwordStrength');
            const passwordFeedback = document.getElementById('passwordFeedback');
            
            registerPassword.addEventListener('input', function() {
                const password = this.value;
                let strength = 0;
                let feedback = '';
                
                if (password.length >= 8) strength += 25;
                if (password.match(/[A-Z]/)) strength += 25;
                if (password.match(/[0-9]/)) strength += 25;
                if (password.match(/[^A-Za-z0-9]/)) strength += 25;
                
                passwordStrength.style.width = `${strength}%`;
                
                if (strength < 50) {
                    passwordStrength.className = 'progress-bar bg-danger';
                    feedback = 'Mot de passe faible';
                } else if (strength < 75) {
                    passwordStrength.className = 'progress-bar bg-warning';
                    feedback = 'Mot de passe moyen';
                } else {
                    passwordStrength.className = 'progress-bar bg-success';
                    feedback = 'Mot de passe fort';
                }
                
                passwordFeedback.textContent = feedback;
            });
            
            // Validation du formulaire d'inscription
            document.getElementById('registerForm').addEventListener('submit', function(e) {
                e.preventDefault();
                const name = document.getElementById('registerName').value;
                const email = document.getElementById('registerEmail').value;
                const password = document.getElementById('registerPassword').value;
                const confirmPassword = document.getElementById('confirmPassword').value;
                
                if (password !== confirmPassword) {
                    alert('Les mots de passe ne correspondent pas');
                    return;
                }
                
                // Ici, vous pourriez ajouter une vérification supplémentaire ou envoyer à un serveur
                alert(`Inscription réussie pour ${name} (${email})`);
                navigateTo('login');
            });
        });
    
