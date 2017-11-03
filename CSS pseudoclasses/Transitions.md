                    ## Transitions
                    
* Allow us to control animation speed when changing CSS properties
*       double the size of this div over 3 seconds

# transition-duration
* How long should the transition last?
    transition-duration: 1s;
    transition-duration: 0.5s;
    transition-duration: 3s, 1s;
* https://codepen.io/AfkZa4aem/pen/dZGKgB?editors=1100

# transition-property
* What properties should be transitioned?
    transition-property: background;
    transition-property: opacity;
    transition-property: transform;
    transition-property: all;
    transition-property: color, opacity;
* https://codepen.io/AfkZa4aem/pen/dZGKgB?editors=1100

# transition-timing-function
* What's the "acceleration curve" for the transition?
    transition-timing-function: ease-in;
    transition-timing-function: ease-out;
    transition-timing-function: linear;
        And even...
    transition-timing-function: cubic-bezier(0.950, 0.050, 0.795, 0.0350;)
* http://easings.net/ru
* https://matthewlein.com/tools/ceaser
* https://codepen.io/AfkZa4aem/pen/dZGKgB?editors=1100

# transition-delay
* how long of a delay before the transition starts
    transition-delay: 4s;
    transition-delay: 5ms, 10s;
* https://codepen.io/AfkZa4aem/pen/dZGKgB?editors=1100

            ## Shorthand Transitions
* we can write it in one line
    transition: background 1.5s ease-in 1;
    transition: 
        transform 2s cubic-bezier(0.000, 0.005, 0.000, 1.055) 1s,
        background-color 0.5s linear;