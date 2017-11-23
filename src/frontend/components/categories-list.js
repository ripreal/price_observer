import React, {Component} from 'react';
//import $ from 'jquery';

class Categories extends Component {
    
    constructor(props) {
        super(props);
        this.state = { categories: [
            {
                slug: "all",
                name: "All"
            },
            {
                slug: "clothing",
                name: "Clothing"
            },
            {
                slug: "shoes",
                name: "Shoes"
            },
            {
                slug: "kitchen",
                name: "Kitchen"
            }
            ]
        };
    }

    shouldComponentUpdate() {
        return false;
    }

    render()  {
        let categories = this.state.categories.map(function(category){
          let url = "#/products?category=" + category.slug;
          return (
            <li key={category.slug}>
              <a href={url}>
                {category.name}
              </a>
            </li>
          );
        });
        return (
        <nav id="main-nav">
            <ul>
                <li>
                    <a href="#/products">
                        <span><i class="fa fa-puzzle-piece" aria-hidden="true"></i>Products</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span><i class="fa fa-folder-open-o" aria-hidden="true"></i>Categories</span>
                    </a>
                    <ul>
                        {categories}
                    </ul>
                </li>
                <li>
                    <a href="#/about">
                        <span><i class="fa fa-address-card-o" aria-hidden="true"></i>About</span>
                    </a>
                </li>
            </ul>
        </nav>
        );
    }

    componentDidMount() {
        window.$('#main-nav > ul').dropotron({
            mode: 'fade',
            noOpenerFade: true,
            hoverDelay: 100,
            hideDelay: 250,
            easing: 'swing'
        })
        window.$(".dropotron > li > a").on("click", (event) => {
                window.$('#main-nav > ul').trigger("doCollapseAll");
            }
        );
    }
}

export default Categories;
