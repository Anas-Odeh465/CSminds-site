import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function UserValidation(){

    return(
        <>
        <link rel="stylesheet" href="Login-and-signup.CSS" />

        {/* container 1 */}
        <div class="container" id="container1">
            <div class="form-container">
                <h2 id="Login">Login</h2>
                
                <p id="gray-text">use your email password</p>

                <form method="POST" action="login_and_create_account.php">
                    <input name="email_log" type="text" placeholder="Email"/>
                    <input name="password_log" type="password" placeholder="Password"/>
                    <a href="#" id="forgot-pass">Forgot Your Password?</a>
                    <button type="submit" name="submit_login" class="login-btn">Login</button>
                </form>

            </div>
            <div class="overlay-container" style="border-top-left-radius: 85px;
                    border-bottom-left-radius: 85px;">
                <h1 id="cs-minds">CS Minds</h1>
                <h2>Hello, Friend!</h2>
                <p>Register with your personal details to use all of site features</p>
                <a href="create_account_and_login.php"><button onclick="showContainer2()">Create account</button></a>
                <div class="social-container">
                    <a href="#"><i class="fab fa-google"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-github"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>

        {/* container 2 */}
        <div class="container hidden" id="container2">
            <div class="overlay-container" style="border-top-right-radius: 85px;
                        border-bottom-right-radius: 85px;">
                <h1 id="cs-minds">CS Minds</h1>           
                <h2>Welcome Back!</h2>
                <p>Enter your personal details to use all of site features</p>
                <button onclick="showContainer1()">Login</button>
                <div class="social-container">
                    <a href="#"><i class="fab fa-google"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-github"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div class="form-container">
                <h2 id="create-account-words">Create Account</h2>
                
                <p id="gray-text">use your email for registration</p>

                <form method="POST" action="login_and_create_account.php">
                    <input class="first-name" name="first_name" type="text" placeholder="First Name"/>
                    <input class="last-name" name="last_name" type="text" placeholder="Last Name"/>
                    <input type="email" name="email" placeholder="Email"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="password" name="password_confirmation" placeholder="Password confirmation"/>
                    <button class="submit_create_account" type="submit" name="submit_create_account">Create</button>
                </form>

            </div>
        </div>

        <script>
            {
                function showContainer1() {
                    document.getElementById('container1').classList.remove('hidden');
                    document.getElementById('container2').classList.add('hidden'); 
                }
            }

            {
                function showContainer2() {
                    document.getElementById('container1').classList.add('hidden');
                    document.getElementById('container2').classList.remove('hidden');
                }
            }
       </script>


        </>
    );
}