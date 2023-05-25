---
title: Ether Gas -  How to save gas on ethereum blockchain
date: "2023-05-25T22:12:03.284Z"
description: "In the traditional cloud computing we are used to; If your account is pay on demand, then it charges you based on the computing capacity and how long it takes for them to execute a given task by your selected infrastructure."
---



In the traditional cloud computing we are used to; If your account is pay on demand, then it charges you based on the computing capacity and how long it takes for them to execute a given task by your selected infrastructure.

Similarly, you get charged based on the amount of time it takes for a method or methods to finish executing in your smart-contract, the only difference being that you pay with gas(crypto) instead of your fiat currency like in a traditional setting.

So the best way to save money while executing methods in smart-contracts is to optimise those methods.

## View functions don’t cost gas!

> `view` functions don't cost any gas when they're called externally by a user. This is because `view` functions don't actually change anything on the blockchain – they only read the data. So marking a function with `view` tells `web3.js` that it only needs to query your local Ethereum node to run the function, and it doesn't actually have to create a transaction on the blockchain (which would need to be run on every single node, and cost gas).
> 

Every new transaction needs to be verified by each and every node on the ethereum blockchain. Every non-view function implies a transaction on the blockchain, and whenever there is a transaction, gas has to be paid. So to avoid that, optimise a lot of your methods with view.

The most expensive transaction in solidity is writing to a storage!