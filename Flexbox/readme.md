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

# flex-dirextion
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