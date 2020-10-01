import React from 'react';

const Navbar = ({icon, title}) => {
    return (
      <nav >
        <h1 className="display-4 text-center mt-4">
            <i className={icon}/>
            My<span className="text-primary">Book</span>List
        </h1>
      </nav>
    )
}
//<h1 class="display-4 text-center">
//            <i class="fas fa-book-open text-primary"></i>
//            My<span class="text-primary">Book</span>List</h1>

Navbar.defaultProps={
    title: 'My Book List',
    icon:'fas fa-book-open text-primary'
};

export default Navbar
