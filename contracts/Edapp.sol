// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Edapp {
    // number of wallet index
    uint256 public numberOfSenders;
    mapping(uint256 => address) public Senders;
    mapping(address => bool) public senders;
    function addinWallet() external payable{
        address senderwallet = msg.sender;
        if (!senders[senderwallet])
        {
            uint256 index = numberOfSenders++;
            senders[senderwallet] = true;
            Senders[index] = senderwallet;
        }
    }

    receive() external payable{}

    function getSendersIndex(uint256 index) external view returns (address) {
        return Senders[index];
    }
    //get sender wallet address
    function getSendersAddress() external view returns (address[] memory) {
        address[] memory _senders = new address[](numberOfSenders);

        for (uint256 i = 0; i< numberOfSenders; i++)
        {
            _senders[i] = Senders[i];
        }
        return _senders;
    }

    function withdraw(uint256 withdrawAmount) external limitWithdraw(withdrawAmount){
        payable(msg.sender).transfer(withdrawAmount);
    }

    modifier limitWithdraw(uint256 withdrawAmount){
        require(withdrawAmount <= 10**18, "Can't withdraw morethan 1ETH");
        _;
    }
}