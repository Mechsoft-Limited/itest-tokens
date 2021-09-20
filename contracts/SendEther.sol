pragma solidity = 0.4.22;


contract SendEther{
    function sendEther(address _to, uint _value) public payable{
        _to.transfer(_value);
    }
}