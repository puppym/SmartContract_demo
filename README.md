# SmartContract_demo  1.0v
这是一个关于区块链智能合约的demo

## 计划任务-关于区块链智能协议的小demo
* Linux下开发环境的搭建（暂时遇到一些问题，首先使用remix浏览器进行学习，后续完成linux下环境的搭建）
* 关于区块链智能协议的一些概念
* 区块链智能合约的demo编写以及运行

## 说明文档
* 这是一个简单的代币合约，提供2个功能1.创建代币：发起合约时创造指定数量的代币，代币拥有者是发起合约的Ethereum账户。2.转移代币：转移指定数量的代币到Ethereum账户。
* 在线运行环境：https://remix.ethereum.org

## 阅读笔记
* 合约就是区块链中的可执行代码。
* 区块链(BlockChain)技术吸引了大量的关注，原因不仅是它作为账本来纪录交易，成为加密货币(例如比特币)的引擎；更重要的是，它可以封装代码和数据，成为“智能合约”(Smart Contract)。而以太坊(Ethereum),是开源区块链技术的一种。
* 在加密保护交易的同时，区块链还提供数据库状态的分布共识。它保证价值转移要么发生一次，要么不发生。应用开发人员可以放心：因为数据一旦存储，就不能修改，可以信赖。区块链网络抽取一个计算机节点，在区块链中产生下一个区块，这个节点要花费大量的算力解决一个数学任务，这个节点是事先未知的。这个节点找到了问题的解答，可以命名下一个区块并发布，网络中的其它节点验证这个发布的区块。由于证明了工作量(Proof of Work), 赢得发布的节点得到两种奖励: 获得新铸成的加密货币，以及从创建交易的一方收取费用。这个过程称为“挖矿”，它的目的是：1.铸成新的加密货币，而产生货币的速率是受严格控制的2.奖励“矿工”，“矿工”验证了交易以及在网络中达成共识。
* Solidity中合约的含义就是一组代码(函数)和数据(状态)，他们位于以太坊区块链的一个特定地址上。
* 智能合约中的操作具有原子性。
* 区块链的由来:解决主要的难题“double-spend attack”如果网络中存在两笔交易，都想花光同一个账户的钱时的解决方法产生了区块链。网络会自动为你选择一条建议序列，并且打包到所谓的"区块"中，然后他们将在所有参与节点中执行和分发。如果两笔交易互相矛盾，那么最终被确认为后发生的交易将被拒绝，不会包含在区块中。这些块按照时间形成了一个线性序列，这正是"区块链"这个词的含义。
* 以太坊虚拟机 EVM 是智能合约的运行环境。它不仅是沙盒封装的，而且是完全隔离的，也就是说在EVM中运行代码是无法访问网络、文件系统和其他进程的。甚至智能合约之间的访问也是受限的。
* 每个账户有一块持久化内存区称为存储。存储是将256位字映射到256位字的键值存储区。在合约中枚举存储是不可能的，且读存储的相对开销很高，修改存储的开销甚至更高。合约只能读写存储区内属于自己的部分。