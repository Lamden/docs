![image](/img/migration/alien_landscape_1.png)

# Arko Dapp Migration Guide

This is a guide to help Dapp developers understand the differences between the Legacy Lamden Blockchain and the new Arko network.

This guide will help you understand the changes Arko brings so that your Dapp can be updated to work on Arko after launch.

## Arko Genesis state

Arko will start with a Genesis State, which is a copy of the Legacy Lamden current state at the time we stop the chain.

Some apps rely on not only current state, but a history of state over time. This history will not be available on Arko but the complete set of Lamden Blocks on the old network will be made available. This way current Dapps that need to reload their history state can rely on these blocks for that data.  The blocks will most likely be hosted in a Github repository that can be cloned and will be made available after the chain migration has taken place.

