import { SelectNode, ConnectRPC } from '../const'
import Web3 from 'web3'

export const selectedNode = ({ commit }, {id, rpcUrl}) =>
{
  return commit(SelectNode, {itemNum: id, rpcUrl})
}
// eslint-disable-next-line no-unused-vars
export const clickedNode = ({ commit }, rpcUrl) => {
  /* eslint-disable no-new */
  console.log(rpcUrl);
  if (!rpcUrl || rpcUrl === "") return;
  const provider = new Web3(new Web3.providers.HttpProvider(rpcUrl));
  return commit(ConnectRPC, provider)
}
