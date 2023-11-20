// JavaScript is synchronous -> Each code is executes one after another 
// JS is single thread 
/*

blocking code : block the flow of program execution
non blocking code : does not block the flow of program exection 


fetch() has  aspecial type of queue called the micro task Queue, micro task queue is faster comapred to other queue   its also called as priority queue 
whatever work happens in fetch() it comes under call back queue as it as more priority 


when we call fetch() our work starts to happen in two parts on goes to the browser or to handel Node API request and the others goes to reserve space for data or variables 
=>    1st, the space gets reserved in the memory . it has 2 kinds of array -> a) Onfulfiled[], b) OnRejection[]
onFulfiled is resolve in Promise and on onRejection is rejection in Promise 
onFulfiled and onRejection are arrays and pushing values dierctly is not allowed in these arrays as they are private fields and we cannot access them 
=>    2nd, handles web based or node based API, from there goes a network request. browser or the node gives us the resource to make network request as they cannot be made directly 
after going to the network request if we get response then it goes to onFulfiled(resolve), if we are not able to response or if the request is stuck then it goes to onRejection(reject)


                         
                        ----------response = fetch('something')----------
                        |                                               |
                       DATA :-                                  web browser/ Node API
                a) OnFulfiled[]                                         |
                b) onRejection[]                                network request
                                                                |              |
                                                        OnFulfiled[]         onRejection[] 


                                    DATA -> RESPONSE -> GLOBAL MEMORY


*/