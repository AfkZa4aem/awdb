                        ## Flexbox

# What is flexbox?
* It's a more efficient way to lay out, align and distribute space among items in a container"
* even if their size is unknown

        * Container properties        * Flex Item properties
          flex-direсtion                order
          justify-content               flex
          flex-wrap                     flex-grow
          align-items                   flex-shrink
          align-content                 align-self

.container {
    display: flex;
}

# flex-direction
* Specifies how items are placed in the flex container, defining the main axis and it's derection

    flex-direction: row;            // default direction
    flex-direction: row-reverse     
    flex-direction: column
    flex-direction: column-reverse
    
# flex-wrap
* specifies whether items are forced into a single line OR can be wrapped into multiple lines 

    flex-wrap: nowrap;
    flex-wrap: wrap;
    flex-wrap: wrap-reverse;    // reverses the star/end of the cross axis
    
# justify-content
* defines how space is distiruted between items in flex container
* Along the main asix
    
    justify-content: flex-start;    // default
    justify-content: flex-end;
    justify-content: center;
    jsutify-content: space-between;
    justify-content: space-around;
    justify-content: space-evenly;

# align-items
* Defines how space is distributed between items in flex container
* Along the cross axis

    align-items: flex-start;
    align-items: flex-end
    align-items: stretch;
    align-items: center;
    align-items: baseline;
    
# align-content
* Define how space is distributed Between Rows in flex container
* Along the cross axis

    align-content: flex-start;
    align-content: flex-end;
    align-content: space-between;
    align-content: space-around;
    align-content: center;
    
* https://codepen.io/AfkZa4aem/pen/KyzqOr?editors=1100