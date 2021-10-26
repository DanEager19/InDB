import logo from './logo.svg';
import './styles.css';

function App() {
  return (
    <body>
        <header id="header" class="LayoutTop">
            <a href="index.html"><img src="/images/logo.png" id="logo"/></a>
            <a class="text_remove" href="/view/index.html">Home</a> 
            <a class="text_remove" href="/view/list.html">List</a>  
            <a class="text_remove" href="/view/login.html">Login</a>
        </header>
        <div class="container">
            <main>
            </main>
    <footer>
        <hr/>
        <p id="footer" class="text-center">Daniel Eager - Contact: | 
            <a href="https://github.com/DanEager19" target="_blank">Github</a> | 
            <a href="https://www.linkedin.com/in/dan-eager/" target="_blank">Linkedin</a> | 
            <a href="https://twitter.com/ZionNyah" target="_blank">Twitter</a> | 
            <a href="mailto:daneager19@gmail.com" target="_blank">Email</a>
        </p>
    </footer>
</div>
</body>
      
  );
}

export default App;
