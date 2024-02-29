import { StoryProtocolGateway } from "@story-protocol/periphery/StoryProtocolGateway.sol";
import { Metadata } from "@story-protocol/periphery/lib/Metadata.sol";

contract ExampleSPGBundledMintAndRegistration {
  
  uint256 public immutable POLICY_ID;
  StoryProtocolGateway public immutable SPG;
  address public immutable DEFAULT_SPG_NFT;
  
  constructor(address spg, addres defaultCollection, uint256 policyId) {
    SPG = StoryProtocolGateway(spg);
    DEFAULT_SPG_NFT = defaultCollection;
    POLICY_ID = policyId;
  }
  
  function register(
  	string calldata nftName,
    string calldata nftDescription
    string calldata nftUrl,
    string calldata nftImage
	) {
    // Setup metadata attribution related to the NFT itself.
    Metadata.Attribute[] memory nftAttributes = new Metadata.Attribute[](1);
    nftAttributes[0] = Attribute({key: "Shirt-size", value: "XL"});
    bytes memory nftMetadata = abi.encode(
        Metadata.TokenData({
          name: nftName
          description: nftDescription
          externalUrl: nftUrl,
          image: nftImage,
          attributes: nftAttributes
        })
      );
      
      // Setup metadata attribution related to the IP semantics.
      Metadata.Attribute[] memory ipAttributes = new Metadata.Attribute[](1);
      attributes[0] = Attribute({key: "trademarkType", value: "merchandising"});
      Metadata.IPMetadata memory ipMetadata = Metadata.IPMetadata({
          name: "name for your IP asset",
          hash: bytes32("your IP asset content hash"),
          url:  "https://yourip.xyz/metadata-regarding-its-ip",
          customMetadata: ipAttributes
      });
      uint256 ipId = SPG.mintAndRegisterIp(
        POLICY_ID,
        DEFAULT_SPG_NFT,
        nftMetadata,
        ipMetadata
      );
    )
  }
}