import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <nav>
                        This is navigation bar.
                    </nav>
                </header>
                <div className="main-body" >This is Body</div>

                <footer class="main-footer">This is Main Footer</footer>
            </React.Fragment>
        );
    }
}

export default Main;