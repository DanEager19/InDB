function header() {
    return (
        <header id="header" class="LayoutTop">
            <a href="index.html"><img src="/images/logo.png" id="logo"></img></a>
            <a class="text_remove" href="/view/index.html">Home</a> 
            <a class="text_remove" href="/view/list.html">List</a>  
            <a class="text_remove" href="/view/login.html">Login</a>
        </header>
    );
}

const head = <header />
ReactDOM.render(header);