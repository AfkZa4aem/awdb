
                    ## CSS Pseudoclasses
                    
# What is pseudoclass
* is a keyword added to a selector that specifies a special state os the selected element(s)
* :hover :focus :active

# :hover
* Trigger by a user mousing over
        div:hover {
            background: purple;
        }

# :focus
* Trigger when an element "receive focus"
        input:focus {
            color: red;
        }

# :active
* Triggers when an element is "being activated by user"
        button: active {
            color: green;
        }


                    ## CSS Transform
                    
# Transform
* Lets you move, warp, rotate, and scale elements

# Translate
* Move something around
* https://codepen.io/AfkZa4aem/pen/POZYJZ?editors=1100#0
        div {
            transform: translateX(100px);
            transform: translateY(20px);
            transform: translate(20px, 20px);
        }

# Scale
* Alter the size of an element
        div {
            transform: scale(2);  // doubles size of divs
            transform: scaleX(0.5);
            transform: scale(3, 5);
        }
* We can use transform-origin, to move scale psition
* https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
        .transformed {
          background-color: #3498db;
          transform: scale(2);
          transform-origin: 0 0;
        }
* https://codepen.io/AfkZa4aem/pen/xPZbJP?editors=1100#

# Rotate
* Using CSS to... rotate things
        div {
            transform: rotate(45deg);
        }
* We can use transform-origin as well
* https://codepen.io/AfkZa4aem/pen/zPrrNo?editors=1100#0
