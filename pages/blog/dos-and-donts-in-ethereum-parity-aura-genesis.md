---
title: "Dos and Don'ts in Ethereum Parity Aura Genesis"
date: "2019-05-15"
---

 

![ethereum parity](/images/blog/ethereum-parity-300x150.png)

 

Blockchain is such a new innovation that holds unknown potential, it’s still very much a journey and not a destination. New discoveries are constantly being made with the technology and that challenges our economic fitness. Along with the specter of the groundbreaking value of blockchain, comes new market opportunities. However, as with any new technology, thorough testing is necessitated in order to capitalize on such opportunities and build on top of a solid foundation. This blog is about taking an experimental yet scientific methodology and applying it for the sound development of our own Parity Aura blockchain genesis.

 

Below we discuss three different exercises we ran last year in order to determine prerequisites for optimal blockchain genesis.

 

## **Exercise 1:** **Genesis with** **1 Boot and 1 Validator Node**

 

For the first exercise, we wanted to see how slowly adding additional nodes and validators would affect blockchain health if we had started with only one boot node and one validator node. After establishing the initial 1:1 pairing of boot nodes to validators, we added 2 more boot nodes to the system and checked. Everything was syncing well.

 

![Blockchain](/images/blog/Blockchain-generic2-300x158.jpg)We then decided to see what would happen by bringing in 2 additional nodes as validators. That’s when we realized we had accidentally changed the genesis block through the additions. 

 

What now? We restarted the nodes one by one to see if it would make a difference. The outcome was node 1 was still okay even though node 2 and 3 continued to have problems with the genesis block. As the new nodes were not able to resync with the blockchain, adding additional validators over time would not be feasible. Thus, starting with 1 boot and 1 validator node was not optimal for the overall health of the blockchain. Conclusion, exercise failed.

 

## **Exercise 2:** **Genesis with** **1 Boot and 2 Validator Nodes**

 

Undeterred by the hitting par for the course, we continued on with our optimization testing. This time we decided to start with 1 boot node and 2 validators. We then added 10 more nodes and observed as everything continued to sync fine.

 

We then added another 5 nodes as validators starting at a block in the future. Let’s call it block #7. We restarted the nodes one by one but ran into a problem. Before the last 2 nodes were back up with the new config, the block had already been mined.

 

All nodes restarted with the new config before the block was mined were fine. However, the other nodes were out of the pool and couldn't be added back anymore. We verified this by seeing that the block hash was different and the nodes were stuck syncing only one specific block.

 

We determined the exercise partly failed as we ended up with 2 blocked validator slots, which was not the result we wanted, even though we had successfully restarted some of the nodes with a new configuration. So you could call it a partial win as well. Regardless, we were on to the next exercise.

 

## **Exercise 3:** **Genesis with 2** **Boot and 10 Validator Nodes**

 

This time we chose to significantly level up our starting node quantities. We began with 2 boot nodes and 10 validators, which we were able to do by keeping the keys and deleting the blockchain storage.

 

We then added 12 more validator nodes and as expected all were humming along with zero sync issues. We had learned in the previous two exercises that adding new validators is only possible if all the required nodes are started with the new configuration before the block is mined.

 

With everything still working, we began testing the strength of the chain. We tested taking down a single node. Everything continued to work fine. We tested taking down multiple nodes and still everything worked right. Consensus remained intact. We even deleted the storage of a node and restarted it. The node recovered without consequence. The exercise was a success.

 

Thanks to these exercises, we achieved a new level of fault-tolerance and architectural resiliency for our blockchain. 

 

## **Detailed takeaways**:

 

- Always have the time in sync for all nodes.
- The setup of the initial nodes is crucial for the future health of the blockchain.
- Nodes need to be reachable over the given Ethereum port (default is 30303).
- Boot nodes need to be reachable when a node is restarted.
- In some situations (like a hard fork) it can be helpful to delete the storage of a node and set the config to no-warp.

 

If you liked this blog, we recommend checking out another one we wrote on how DLT is being used to disrupt the code signing industry with a better user experience.

 

 

[Yes! Take Me to the Blog](https://www.codenotary.io/the-distributed-ledger-technology-at-the-center-of-the-code-signing-disruption/)
