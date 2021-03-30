---
title: 'Introduction to the AEA Framework'
date: 2020-12-29T12:00:00+00:00
draft: false
weight: 4
summary: Framework introduction and AEA definition
---

## Intro

The Autonomous Economic Agent (AEA) Framework is a concept for a software toolkit that allows developers and researchers to create agents from components.

A [software agent](https://en.wikipedia.org/wiki/Software_agent) is a computer programme that acts on behalf of a human or an organisation and pursues a goal or optimizes an internal [utility](https://en.wikipedia.org/wiki/Utility) function.

To do so, an agent usually needs to connect to and communicate with many other [services](https://en.wikipedia.org/wiki/Service_(systems_architecture)) and other agents.

An AEA is an agent that has capabilities to autonomously [transact](https://dictionary.cambridge.org/dictionary/english/transact) and engage in [other](https://en.wikipedia.org/wiki/Auction) [forms](https://en.wikipedia.org/wiki/Matching_theory_(economics)) of economic exchange with other AEAs, humans and organisations. The primary [settlement](https://en.wikipedia.org/wiki/Settlement_(finance)) and [commitment (or smart contracting)](https://en.wikipedia.org/wiki/Smart_contract) layer is facilitated by [Distributed Ledger Technologies](https://en.wikipedia.org/wiki/Distributed_ledger) (DLT).

In programming terms, AEAs are defined by the software components they consists of, the data they are initialised with as well as the wallet they control. Their wallet contains cryptographic key-pairs which are used to sign [transactions](https://en.wikipedia.org/wiki/Blockchain) and messages.

The AEA framework is not the first agent framework. In fact, there have been many frameworks proposed in the [literature](https://www.sciencedirect.com/science/article/pii/S1877705814002355) and multiple implementations exist, most prominently the Java-based [Jade](https://en.wikipedia.org/wiki/Java_Agent_Development_Framework), as well as several Python-based frameworks [1](https://spade-mas.readthedocs.io/en/latest/index.html), [2](https://pypi.org/project/pade/), [3](https://osbrain.readthedocs.io/en/stable/). What sets the AEA framework apart is that it has been built for a truly decentralized multi-stakeholder environment with native support for DLT and that it acts as a product for both developers and users of agents.

In the following sections I discuss the framework, its motivation and application in more detail.

## Motivation

The AEA framework evolved from work my team did at [Fetch.ai](https://fetch.ai) on our [trading agent competition (TAC)](https://github.com/fetchai/agents-tac) in 2019. At the time, the company had no agent framework and most development focus was on the ledger and several agent libraries. However, when working on the TAC we noticed that the library-based approach did not lend itself well to build agents in a repeatable and organised manner. Hence, we started looking into the idea of a framework which would allow us to build entire agents quickly through re-use of code and good encapsulation of functionalities.

Based on my own experience in working with web frameworks like [Django](https://www.djangoproject.com) and [Ruby on Rails](https://rubyonrails.org) I was keen to replicate a similar experience for agent development. However, it was also clear, that unlike in web development, development of agents would be more challenging and that as a result it would be useful if developers could re-use not just framework-specific plugins but entire business logic components or agents.

Besides enabling Fetch.ai's vision of a DLT enabled multi-stakeholder multi-agent system I was personally also inspired by the challenge of creating a framework which allowed any user to run software under their full control, without reliance on a third party, and have that software work for them.

Fortunately, at Fetch.ai my colleagues Ali Hosseini and Marco Favorito were equally excited about the framework concept and provided the necessary background from MAS and (symbolic) AI. Senior management at Fetch.ai also backed the idea and provided the necessary support.

## Framework design

The framework is based around the concept of [asynchronous message passing](https://en.wikipedia.org/wiki/Message_passing) and uses an [actor](https://en.wikipedia.org/wiki/Actor_model)-like design paradigm. Messages are the primary means of communication between framework components as well as agents.

The [framework](https://docs.fetch.ai/aea/diagram/) aims to allow for modularity and reuse. As such it defines four core components which make up an agent:

- [skills](https://docs.fetch.ai/aea/skill/): are the core focus of the framework's extensibility as they implement business logic to deliver economic value for the AEA and its owner. Skills is where we treat complexity.
- [connections](https://docs.fetch.ai/aea/connection/): wrap an SDK or API and provide an interface to network, ledgers and other services. Where necessary, a connection is responsible for translating between the framework specific protocols and the external service or third-party protocol (e.g. HTTP).
- [protocols](https://docs.fetch.ai/aea/protocol/): define agent-to-agent as well as component-to-component interactions within agents. As such, they include `Messages`, which define the representation, serialization logic, which define how a `Message` is encoded for transport; and, optionally `Dialogues`, which define rules over `Message` sequences.
- [contracts](https://docs.fetch.ai/aea/contract/): wrap smart contracts for Fetch.ai and third-party decentralized ledgers. In particular, they provide wrappers around the API or ABI of a smart contract and its byte code.

The developer develops some of the packages and places them in context to each other in an agent. The framework then calls the code in the packages. Unlike in libraries, frameworks make use of [inversion of control](https://en.wikipedia.org/wiki/Inversion_of_control) and are running and calling the code.

Currently, the framework is [implemented](https://github.com/fetchai/agents-aea/) in the Python programming language. However, implementation in other languages is feasible too and importantly, it is fully interoperable with any language stack provided the protocols are implemented correctly. A demonstration of such interoperability with a simple agent implemented in Golang is provided [here]().

Together, these four components can be utilised to establish interaction protocols between entities.

The framework also offers auciliary tools and services, including a command line interface (CLI), test tools, a registry for framework packages, and a desktop app to run finished agents.

In its design, the framework makes no assumptions about the type of agents implemented with it. As discussed below, it can be used in a wide range of application areas.

## Research

Agent frameworks and multi-agent systems (MAS) have only found limited real-world applications despite being developed in the research community for multiple decades [](http://jasss.soc.surrey.ac.uk/18/1/11.html) and [](https://www.researchgate.net/publication/298411597_Introduction_to_the_Special_Issue_Ten_Years_of_Autonomous_Agents_and_Multiagent_Systems). We hope that the AEA framework will see adoption in and contributions from the wider MAS community.

We have written a number of research papers to present our work to the wider MAS community [](). We were also fortunate to gain the advice from eminent researchers in the space including Mark Woolford ()[] and Ani ()[] at Oxford University.

We invite the AI research community to contribute to the framework's further development and help us improve the role for machine learning, reinforcement learning and other AI approaches in the framework. We invite the MAS research community to help us improve the agent interactions (protocols, skills) and other framework primitives. We invite economists to help us implement additional mechanisms for multi-stakeholder agent economies. We invite developers of tools like Brownie and Vyper for instance, to help us integrate them with the framework. We invite everyone to contribute where they can do so!

## Examples of interactions

### AEA <-> AEA

AEAs use the public internet for message transport. The [agent communication network](https://docs.fetch.ai/aea/acn/) allows AEAs to communicate knowing their cryptographic addresses alone. The ACN is a multi-tier messaging system with a peer-to-peer overlay network at its core. The peers maintain a [distributed hash table](https://en.wikipedia.org/wiki/Distributed_hash_table) that maps addresses to network addresses.

![ACN](/images/acn.svg)

The messages are part of a protocol for agent communication. The AEA framework allows developers to use existing protocols, create new protocols and share them with other developers via the [AEA registry](aea-registry.fetch.ai).

There is no limit to the type of interactions AEAs can engage in. A common example is two AEAs engaging in [negotiation](https://docs.fetch.ai/aea/weather-skills/) which results in a transaction on a ledger.

### AEA <-> Server

AEAs are not limited to communicate with other AEAs only. AEAs might connect to servers as clients, requesting whathever services the server provides.

A common example is AEAs querying public APIs for information, e.g. public transport information.

### AEA <-> Client

AEAs can also maintain servers to serve requests to other clients. For instance, an AEA might run a server to allow its owner to connect to it via a web client.

### AEA <-> Blockchain node

In the context of DLT AEAs act as off-chain elements. They can query ledger state, submit transactions and make smart contract calls. This allows AEAs to utilise the properties of blockchains, like public code execution and censorship resistant exchange.


## Application Areas

By now, multiple application areas should come to mind. Some concrete themes are introduced here, but this should not be taken as an exhaustive list.

1. automate user interactions with blockchains

	AEAs can be used to automate interactions of a user with a blockchain. The benefit is that the AEA can perform the interactions reliably and efficiently. A prominent example is the [Autonomous Hegician](https://github.com/8ball030/AutonomousHegician) which uses an AEA to [automate option management](https://www.youtube.com/watch?v=ty2X8q2ksMk).

2. enhance user interactions with blockchains

	Users are heavily constrained when using blockchains by the web clients they have access to and their own abilities. An AEA can interact with a blockchain much faster, more securely and with more protocols than a human ever could.

	{{< rawhtml >}}
	<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">One use case this enables is a smart wallet as described by <a href="https://twitter.com/StaniKulechov?ref_src=twsrc%5Etfw">@StaniKulechov</a> . The AEA can take care of all the complexity involved in managing this. If you’re keen to build this or other DeFi applications using AEAs then reach out! <a href="https://t.co/hFGMJgNpVg">https://t.co/hFGMJgNpVg</a></p>&mdash; David Minarsch (@david_enim) <a href="https://twitter.com/david_enim/status/1369572082917507074?ref_src=twsrc%5Etfw">March 10, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
	{{< /rawhtml >}}

3. abstract ledger specifics for developers

	For developers the framework abstracts away many ledger specifics. It allows developers to reuse plugins for specific ledgers which provide a common interace, thereby making it straight forward to write cross-ledger applications.

4. supply off-chain data to blockchains

	Transaction based blockchain systems rely on constant external input to progress. As a result oracles take an important role for many on-chain applications. AEAs can be used to operate oracles. Since AEAs can utilise off-chain protocols they are the ideal framework to develop resilient [oracles](https://blog.chain.link/oracles-the-key-to-unlocking-smart-contracts/).

5. bridge different ecosystem

	An AEA can bridge disconnected ecosystems. For instance, it can wrap a public API to serve data to other agents in agent native protocols, or expose its information via a server.

6. agent to agent interactions

	AEAs shine when they are used to build multi-stakeholder agent-based solutions. Some examples we worked on include supply chain, mobility and travel.

	AEAs can also be connected to Layer 2 solutions like state channels [Perun] and rollups [Optimism] to enable fast and cheap off-chain transactions.

7. simplify protocol development

	A side effect of the AEA's protocol generator is that it allows developers to easily define new interaction protocols. In fact, with some extra effort this tool could be made available to everyone, providing an answer to this question:

	{{< rawhtml >}}
	<blockquote class="twitter-tweet"><p lang="en" dir="ltr">How can we make protocol development as easy as web development?</p>&mdash; balajis.com (@balajis) <a href="https://twitter.com/balajis/status/1297225036084830208?ref_src=twsrc%5Etfw">August 22, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
	{{< /rawhtml >}}

 8. simulated multi-stakeholder economies 

 	Although the framework was not developed for simulations and agent-based modelling, it does lend itself under certain scenarios for this purpose. In particular, when no synchronisation between agents is required and the simulation is meant to be as-close-to-reality-as-possible then the AEA framework can be used for this purpose. The multi-agent manager let's developers spin up many agents in a dynamic way. agent-based modelling
	https://github.com/projectmesa/mesa
	https://www.pykka.org/en/latest/quickstart/#rules-of-the-actor-model

As evident from the above list, the framework is a product for both developers and end users of agents.

## What's in it for me?

- As a smart contract developer you can use the AEA to automate contract calls and contract deployment. Much like [Keeper](), but not tied to a specific token or use-cases.

- As an agents-oriented developer you can use the AEA framework to combine machine learning code, agent-to-agent communication, DLT faciliated exchange mechanisms and search and discovery in one code-base.

- More generally, any developer can leverage the framework infrastructure (AEA registry) and tools for code distribution, reuse existing components (for decentralized apps but also legacy ones) and develop reusable new components.

- As a researcher, you can contribute to the evolution of the framework. We just painted the rough strokes, there are many gaps to fill!

We hope you too will be part of a community of researchers and engineers working on the bleeding edge of technology in fields of machine learning, multi-agent systems and DLTs. Emphasis on Fetch being a research & innovation company takling classical hard problems known within their fields and new ones that emerges from the intersection of considered fields and expecting the *active involvement* of our users.

Now, why not get started and [build your first](https://docs.fetch.ai/aea/quickstart) AEA?




agent: key-pair, some I/O unique to the agent, message based communication


ACN properties: send and forget (a bit like UDP); 

How to establish a stable protocol on top: timeout on skill side,

How to deal with unordered messages? We need to queue; can do so in dialogues module; when next message arives we can dequeue;


Vision: codify everything ?


Check docs and link to them...
Check AEA paper, protocol paper and ACN paper for snippets...


agent is tasked with looking after their interest by maximising their utility. To this end, the agents must be made aware of their owners' preferences \cite{preferences} and values \cite{value}.


https://how.complexsystems.fail


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Remember when the idea of an autonomous vehicle ($TSLA) using crypto to negotiate for road space, fuel, WiFi, etc. was Sci-Fi? Will be here before you know it.<a href="https://t.co/7KCwayRIlE">https://t.co/7KCwayRIlE</a> <a href="https://t.co/RVeogDcPso">pic.twitter.com/RVeogDcPso</a></p>&mdash; Cameron Winklevoss (@cameron) <a href="https://twitter.com/cameron/status/1359534967743725573?ref_src=twsrc%5Etfw">February 10, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">In the last 3 months ARM shipped 6.7 billion CPUs. That&#39;s 842 chips per second. Compare that to 4.3 humans born per second. We now produce 200 times more computers per second than human beings.</p>&mdash; David Holz (@DavidSHolz) <a href="https://twitter.com/DavidSHolz/status/1360726586236968966?ref_src=twsrc%5Etfw">February 13, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>