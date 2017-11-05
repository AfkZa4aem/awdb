                    ## Flex Item Property
                    
# align-self
* allows you to override align-items on individual flex items

    align-self: auto;
    align-self: flex-start;
    align-self: flex-end;
    align-self: center;
    align-self: baseline;
    align-self: strech
    
    
# order
* specifies the order used to lay out items in their flex container
* all items have index 0 by default


# flex
* Defines how a flex item will grow or shrink to fit the available space in a container
*   it's actually a shorthand property for 3 other properties
        <'flex-grow'>
            <'flex-shrink'>
                <'flex-basis'>

## flex-basis
* sort of like width, but not
*   Specifies the ideal size of a flex item BEFORE it's placed into a flex container
*       working like width when you working with rows
*       working like height when you working with column
            flex-basis: 100px;

## flex-grow
* Dictates how the unused space should be spread amongst flex items
*   To make all boxes share space evenly..
        .box {
            flex-grow: 1;
        }
*   to give unuse space for specified box:
        .box {
            flex-grow: 1;
        }
        .box-2 {
            flex-grow: 2;       // it doesn't mean that box-2 will be 2 times more then other boxes
        }

## flex-shrink
* Dictates how items should shrink when there isn't enough space in container
        .box {
            flex.shrink: 1;
        }

## shorthand
    
    flex: 0 0 200px;        same as:          flex-grow: 0;
                                              flex-shrink: 0;
                                              flex-basis: 200px;  
            
            
        
        