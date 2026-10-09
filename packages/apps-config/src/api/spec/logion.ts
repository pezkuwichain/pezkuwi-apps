// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

// structs need to be in order
/* eslint-disable sort-keys */

import type { DefinitionsTypes, OverrideBundleDefinition, RegistryTypes } from '@pezkuwi/types/types';

// The type definitions @logion/node-api 0.27.0-4 (Apache-2.0, logion-network/logion-api)
// exports from interfaces/definitions, kept here as data: the package itself depends on
// an old @polkadot/api tree.
// RegistryTypes does not model a struct's `_alias` map (TransactionInfo), which the
// registry accepts; the package's own declarations hid that by typing these narrowly.
const logionDefault: { types: DefinitionsTypes } = { types: {
  OpaquePeerId: 'Vec<u8>',
  AccountInfo: 'AccountInfoWithDualRefCount',
  TAssetBalance: 'u128',
  AssetDetails: {
    owner: 'AccountId',
    issuer: 'AccountId',
    admin: 'AccountId',
    freezer: 'AccountId',
    supply: 'Balance',
    deposit: 'DepositBalance',
    max_zombies: 'u32',
    min_balance: 'Balance',
    zombies: 'u32',
    accounts: 'u32',
    is_frozen: 'bool'
  },
  AssetMetadata: {
    deposit: 'DepositBalance',
    name: 'Vec<u8>',
    symbol: 'Vec<u8>',
    decimals: 'u8'
  },
  LocId: 'u128',
  LegalOfficerCaseOf: {
    owner: 'AccountId',
    requester: 'Requester',
    metadata: 'Vec<MetadataItem>',
    files: 'Vec<File>',
    closed: 'bool',
    loc_type: 'LocType',
    links: 'Vec<LocLink>',
    void_info: 'Option<LocVoidInfo<LocId>>',
    replacer_of: 'Option<LocId>',
    collection_last_block_submission: 'Option<BlockNumber>',
    collection_max_size: 'Option<CollectionSize>',
    collection_can_upload: 'bool',
    seal: 'Option<Hash>',
    sponsorship_id: 'Option<SponsorshipId>',
    value_fee: 'Balance',
    legal_fee: 'Balance',
    collection_item_fee: 'Balance',
    tokens_record_fee: 'Balance'
  },
  MetadataItemParams: {
    name: 'Hash',
    value: 'Hash',
    submitter: 'SupportedAccountId'
  },
  MetadataItem: {
    name: 'Hash',
    value: 'Hash',
    submitter: 'SupportedAccountId',
    acknowledgedByOwner: 'bool',
    acknowledgedByVerifiedIssuer: 'bool'
  },
  LocType: {
    _enum: [
      'Transaction',
      'Identity',
      'Collection'
    ]
  },
  LocLinkParams: {
    id: 'LocId',
    nature: 'Hash',
    submitter: 'SupportedAccountId'
  },
  LocLink: {
    id: 'LocId',
    nature: 'Hash',
    submitter: 'SupportedAccountId',
    acknowledgedByOwner: 'bool',
    acknowledgedByVerifiedIssuer: 'bool'
  },
  FileParams: {
    hash: 'Hash',
    nature: 'Hash',
    submitter: 'SupportedAccountId'
  },
  File: {
    hash: 'Hash',
    nature: 'Hash',
    submitter: 'SupportedAccountId',
    acknowledgedByOwner: 'bool',
    acknowledgedByVerifiedIssuer: 'bool'
  },
  LocVoidInfo: {
    replacer: 'Option<LocId>'
  },
  StorageVersion: {
    _enum: [
      'V1',
      'V2MakeLocVoid',
      'V3RequesterEnum',
      'V4ItemSubmitter',
      'V5Collection',
      'V6ItemUpload',
      'V7ItemToken',
      'V8AddSeal',
      'V9TermsAndConditions',
      'V10AddLocFileSize',
      'V11EnableEthereumSubmitter',
      'V12Sponsorship',
      'V13AcknowledgeItems',
      'V14HashLocPublicData',
      'V15AddTokenIssuance',
      'V16MoveTokenIssuance',
      'V17HashItemRecordPublicData',
      'V18AddValueFee',
      'V19AcknowledgeItemsByIssuer',
      'V20AddCustomLegalFee',
      'V21EnableRequesterLinks',
      'V22AddRecurrentFees'
    ]
  },
  Requester: {
    _enum: {
      None: null,
      Account: 'AccountId',
      Loc: 'LocId',
      OtherAccount: 'OtherAccountId'
    }
  },
  CollectionSize: 'u32',
  CollectionItemId: 'Hash',
  CollectionItem: {
    description: 'Hash',
    files: 'Vec<CollectionItemFile>',
    token: 'Option<CollectionItemToken>',
    restricted_delivery: 'bool',
    terms_and_conditions: 'Vec<TermsAndConditionsElement>'
  },
  TokenIssuance: 'u64',
  CollectionItemFile: {
    name: 'Hash',
    content_type: 'Hash',
    fileSize: 'u32',
    hash: 'Hash'
  },
  CollectionItemToken: {
    token_type: 'Hash',
    token_id: 'Hash',
    token_issuance: 'TokenIssuance'
  },
  LegalOfficerData: {
    _enum: {
      Host: 'HostData',
      Guest: 'AccountId'
    }
  },
  HostData: {
    node_id: 'Option<OpaquePeerId>',
    base_url: 'Option<Vec<u8>>',
    region: 'Region'
  },
  Region: {
    _enum: [
      'Europe'
    ]
  },
  LoAuthorityListStorageVersion: {
    _enum: [
      'V1',
      'V2AddOnchainSettings',
      'V3GuestLegalOfficers',
      'V4Region'
    ]
  },
  TermsAndConditionsElement: {
    tcType: 'Hash',
    tcLoc: 'LocId',
    details: 'Hash'
  },
  LogionVote: {
    locId: 'LocId',
    ballots: 'Vec<Ballot>'
  },
  Ballot: {
    voter: 'LocId',
    status: 'AccountId'
  },
  BallotStatus: {
    _enum: [
      'NotVoted',
      'VotedYes',
      'VotedNo'
    ]
  },
  VoteId: 'u64',
  VoteClosed: 'bool',
  VoteApproved: 'bool',
  LegalOfficerCaseSummary: {
    owner: 'AccountId',
    requester: 'Option<AccountId>'
  },
  TokensRecord: {
    description: 'Hash',
    files: 'Vec<TokensRecordFile>',
    submitter: 'AccountId'
  },
  TokensRecordFile: {
    name: 'Hash',
    contentType: 'Hash',
    file_size: 'u32',
    hash: 'Hash'
  },
  VerifiedIssuer: {
    identityLoc: 'LocId'
  },
  OtherAccountId: {
    _enum: {
      Ethereum: 'H160'
    }
  },
  SupportedAccountId: {
    _enum: {
      None: null,
      Polkadot: 'AccountId',
      Other: 'OtherAccountId'
    }
  },
  SponsorshipId: 'u128',
  Sponsorship: {
    sponsor: 'AccountId',
    sponsored_account: 'SupportedAccountId',
    legal_officer: 'AccountId',
    loc_id: 'Option<LocId>'
  },
  Beneficiary: {
    _enum: {
      Other: null,
      LegalOfficer: 'AccountId'
    }
  },
  ItemsParams: {
    metadata: 'Vec<MetadataItemParams>',
    files: 'Vec<FileParams>',
    links: 'Vec<LocLinkParams>'
  }
} };

const logionRuntime: { types: DefinitionsTypes } = { types: {
  Fixed64: 'Int<64, Fixed64>',
  FixedI64: 'Int<64, FixedI64>',
  FixedU64: 'UInt<64, FixedU64>',
  Fixed128: 'Int<128, Fixed128>',
  FixedI128: 'Int<128, FixedI128>',
  FixedU128: 'UInt<128, FixedU128>',
  I32F32: 'Int<64, I32F32>',
  U32F32: 'UInt<64, U32F32>',
  PerU16: 'UInt<16, PerU16>',
  Perbill: 'UInt<32, Perbill>',
  Percent: 'UInt<8, Percent>',
  Permill: 'UInt<32, Permill>',
  Perquintill: 'UInt<64, Perquintill>',
  AccountId: 'AccountId32',
  AccountId20: 'GenericEthereumAccountId',
  AccountId32: 'GenericAccountId32',
  AccountId33: 'GenericAccountId33',
  AccountIdOf: 'AccountId',
  AccountIndex: 'GenericAccountIndex',
  Address: 'MultiAddress',
  AssetId: 'u64',
  Balance: 'UInt<128, Balance>',
  BalanceOf: 'Balance',
  Block: 'GenericBlock',
  BlockNumber: 'u32',
  BlockNumberFor: 'BlockNumber',
  BlockNumberOf: 'BlockNumber',
  Call: 'GenericCall',
  CallHash: 'Hash',
  CallHashOf: 'CallHash',
  ChangesTrieConfiguration: {
    digestInterval: 'u32',
    digestLevels: 'u32'
  },
  ChangesTrieSignal: {
    _enum: {
      NewConfiguration: 'Option<ChangesTrieConfiguration>'
    }
  },
  ConsensusEngineId: 'GenericConsensusEngineId',
  CodecHash: 'Hash',
  CrateVersion: {
    major: 'u16',
    minor: 'u8',
    patch: 'u8'
  },
  Digest: {
    logs: 'Vec<DigestItem>'
  },
  DigestItem: {
    _enum: {
      Other: 'Bytes',
      AuthoritiesChange: 'Vec<AuthorityId>',
      ChangesTrieRoot: 'Hash',
      SealV0: 'SealV0',
      Consensus: 'Consensus',
      Seal: 'Seal',
      PreRuntime: 'PreRuntime',
      ChangesTrieSignal: 'ChangesTrieSignal',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  ExtrinsicsWeight: {
    normal: 'Weight',
    operational: 'Weight'
  },
  H32: '[u8; 4; H32]',
  H64: '[u8; 8; H64]',
  H128: '[u8; 16; H128]',
  H160: '[u8; 20; H160]',
  H256: '[u8; 32; H256]',
  H512: '[u8; 64; H512]',
  H1024: '[u8; 128; H1024]',
  H2048: '[u8; 256; H2048]',
  Hash: 'H256',
  Header: {
    parentHash: 'Hash',
    number: 'Compact<BlockNumber>',
    stateRoot: 'Hash',
    extrinsicsRoot: 'Hash',
    digest: 'Digest'
  },
  HeaderPartial: {
    parentHash: 'Hash',
    number: 'BlockNumber'
  },
  IndicesLookupSource: 'GenericLookupSource',
  Index: 'u32',
  Justification: '(ConsensusEngineId, EncodedJustification)',
  EncodedJustification: 'Bytes',
  Justifications: 'Vec<Justification>',
  KeyValue: '(StorageKey, StorageData)',
  KeyTypeId: 'u32',
  LockIdentifier: '[u8; 8]',
  LookupSource: 'MultiAddress',
  LookupTarget: 'AccountId',
  ModuleId: 'LockIdentifier',
  MultiAddress: 'GenericMultiAddress',
  MultiSigner: {
    _enum: {
      Ed25519: '[u8; 32]',
      Sr25519: '[u8; 32]',
      Ecdsa: '[u8; 33]'
    }
  },
  Moment: 'UInt<64, Moment>',
  OpaqueCall: 'Bytes',
  Origin: 'DoNotConstruct<Origin>',
  OriginCaller: {
    _enum: {
      System: 'SystemOrigin'
    }
  },
  PalletId: 'LockIdentifier',
  PalletsOrigin: 'OriginCaller',
  PalletVersion: {
    major: 'u16',
    minor: 'u8',
    patch: 'u8'
  },
  Pays: {
    _enum: [
      'Yes',
      'No'
    ]
  },
  Phantom: 'Null',
  PhantomData: 'Null',
  Releases: {
    _enum: [
      'V1',
      'V2',
      'V3',
      'V4',
      'V5',
      'V6',
      'V7',
      'V8',
      'V9',
      'V10'
    ]
  },
  RuntimeCall: 'Call',
  RuntimeEvent: 'Event',
  RuntimeDbWeight: {
    read: 'Weight',
    write: 'Weight'
  },
  SignedBlock: 'SignedBlockWithJustifications',
  SignedBlockWithJustification: {
    block: 'Block',
    justification: 'Option<EncodedJustification>'
  },
  SignedBlockWithJustifications: {
    block: 'Block',
    justifications: 'Option<Justifications>'
  },
  Slot: 'u64',
  SlotDuration: 'u64',
  StorageData: 'Bytes',
  StorageInfo: {
    palletName: 'Bytes',
    storage_name: 'Bytes',
    prefix: 'Bytes',
    maxValues: 'Option<u32>',
    maxSize: 'Option<u32>'
  },
  StorageProof: {
    trieNodes: 'Vec<Bytes>'
  },
  TransactionPriority: 'u64',
  TransactionLongevity: 'u64',
  TransactionTag: 'Bytes',
  TransactionInfo: {
    _alias: {
      dataSize: 'size'
    },
    chunkRoot: 'H256',
    contentHash: 'H256',
    dataSize: 'u32',
    blockChunks: 'u32'
  },
  TransactionStorageProof: {
    chunk: 'Vec<u8>',
    proof: 'Vec<Vec<u8>>'
  },
  ValidatorId: 'AccountId',
  ValidatorIdOf: 'ValidatorId',
  WeightV0: 'u32',
  WeightV1: 'u64',
  WeightV2: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  Weight: 'WeightV2',
  WeightMultiplier: 'Fixed64',
  PreRuntime: '(ConsensusEngineId, Bytes)',
  SealV0: '(u64, Signature)',
  Seal: '(ConsensusEngineId, Bytes)',
  Consensus: '(ConsensusEngineId, Bytes)',
  ExtrinsicInclusionMode: {
    _enum: [
      'AllExtrinsics',
      'OnlyInherents'
    ]
  }
} };

const logionSession: { types: DefinitionsTypes } = { types: {
  BeefyKey: '[u8; 33]',
  Keys: 'SessionKeys2',
  SessionKeys1: '(AccountId)',
  SessionKeys2: '(AccountId, AccountId)',
  SessionKeys3: '(AccountId, AccountId, AccountId)',
  SessionKeys4: '(AccountId, AccountId, AccountId, AccountId)',
  SessionKeys5: '(AccountId, AccountId, AccountId, AccountId, AccountId)',
  SessionKeys6: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)',
  SessionKeys6B: '(AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)',
  SessionKeys7: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)',
  SessionKeys7B: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)',
  SessionKeys8: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)',
  SessionKeys8B: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)',
  SessionKeys9: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)',
  SessionKeys9B: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)',
  SessionKeys10: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)',
  SessionKeys10B: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)',
  FullIdentification: 'Exposure',
  IdentificationTuple: '(ValidatorId, FullIdentification)',
  MembershipProof: {
    session: 'SessionIndex',
    trieNodes: 'Vec<Bytes>',
    validatorCount: 'ValidatorCount'
  },
  SessionIndex: 'u32',
  ValidatorCount: 'u32'
} };

const defaultTypesUpTo109 = {
  Address: 'MultiAddress',
  LookupSource: 'MultiAddress',
  PeerId: '(Vec<u8>)',
  AccountInfo: 'AccountInfoWithDualRefCount',
  TAssetBalance: 'u128',
  AssetId: 'u64',
  AssetDetails: {
    owner: 'AccountId',
    issuer: 'AccountId',
    admin: 'AccountId',
    freezer: 'AccountId',
    supply: 'Balance',
    deposit: 'DepositBalance',
    max_zombies: 'u32',
    min_balance: 'Balance',
    zombies: 'u32',
    accounts: 'u32',
    is_frozen: 'bool'
  },
  AssetMetadata: {
    deposit: 'DepositBalance',
    name: 'Vec<u8>',
    symbol: 'Vec<u8>',
    decimals: 'u8'
  },
  LocId: 'u128',
  LegalOfficerCaseOf: {
    owner: 'AccountId',
    requester: 'Requester',
    metadata: 'Vec<MetadataItem>',
    files: 'Vec<File>',
    closed: 'bool',
    loc_type: 'LocType',
    links: 'Vec<LocLink>',
    void_info: 'Option<LocVoidInfo<LocId>>',
    replacer_of: 'Option<LocId>',
    collection_last_block_submission: 'Option<BlockNumber>',
    collection_max_size: 'Option<CollectionSize>'
  },
  MetadataItem: {
    name: 'Vec<u8>',
    value: 'Vec<u8>',
    submitter: 'AccountId'
  },
  LocType: {
    _enum: [
      'Transaction',
      'Identity',
      'Collection'
    ]
  },
  LocLink: {
    id: 'LocId',
    nature: 'Vec<u8>'
  },
  File: {
    hash: 'Hash',
    nature: 'Vec<u8>',
    submitter: 'AccountId'
  },
  LocVoidInfo: {
    replacer: 'Option<LocId>'
  },
  StorageVersion: {
    _enum: [
      'V1',
      'V2MakeLocVoid',
      'V3RequesterEnum',
      'V4ItemSubmitter',
      'V5Collection'
    ]
  },
  Requester: {
    _enum: {
      None: null,
      Account: 'AccountId',
      Loc: 'LocId'
    }
  },
  CollectionSize: 'u32',
  CollectionItemId: 'Hash',
  CollectionItem: {
    description: 'Vec<u8>'
  }
};

const defaultTypesUpTo111 = {
  Address: 'MultiAddress',
  LookupSource: 'MultiAddress',
  PeerId: '(Vec<u8>)',
  AccountInfo: 'AccountInfoWithDualRefCount',
  TAssetBalance: 'u128',
  AssetId: 'u64',
  AssetDetails: {
    owner: 'AccountId',
    issuer: 'AccountId',
    admin: 'AccountId',
    freezer: 'AccountId',
    supply: 'Balance',
    deposit: 'DepositBalance',
    max_zombies: 'u32',
    min_balance: 'Balance',
    zombies: 'u32',
    accounts: 'u32',
    is_frozen: 'bool'
  },
  AssetMetadata: {
    deposit: 'DepositBalance',
    name: 'Vec<u8>',
    symbol: 'Vec<u8>',
    decimals: 'u8'
  },
  LocId: 'u128',
  LegalOfficerCaseOf: {
    owner: 'AccountId',
    requester: 'Requester',
    metadata: 'Vec<MetadataItem>',
    files: 'Vec<File>',
    closed: 'bool',
    loc_type: 'LocType',
    links: 'Vec<LocLink>',
    void_info: 'Option<LocVoidInfo<LocId>>',
    replacer_of: 'Option<LocId>',
    collection_last_block_submission: 'Option<BlockNumber>',
    collection_max_size: 'Option<CollectionSize>',
    collection_can_upload: 'bool'
  },
  MetadataItem: {
    name: 'Vec<u8>',
    value: 'Vec<u8>',
    submitter: 'AccountId'
  },
  LocType: {
    _enum: [
      'Transaction',
      'Identity',
      'Collection'
    ]
  },
  LocLink: {
    id: 'LocId',
    nature: 'Vec<u8>'
  },
  File: {
    hash: 'Hash',
    nature: 'Vec<u8>',
    submitter: 'AccountId'
  },
  LocVoidInfo: {
    replacer: 'Option<LocId>'
  },
  StorageVersion: {
    _enum: [
      'V1',
      'V2MakeLocVoid',
      'V3RequesterEnum',
      'V4ItemSubmitter',
      'V5Collection',
      'V6ItemUpload'
    ]
  },
  Requester: {
    _enum: {
      None: null,
      Account: 'AccountId',
      Loc: 'LocId'
    }
  },
  CollectionSize: 'u32',
  CollectionItemId: 'Hash',
  CollectionItem: {
    description: 'Vec<u8>',
    files: 'Vec<CollectionItemFile<Hash>>'
  },
  CollectionItemFile: {
    name: 'Vec<u8>',
    content_type: 'Vec<u8>',
    fileSize: 'u32',
    hash: 'Hash'
  }
};

const defaultTypesUpTo116 = {
  Address: 'MultiAddress',
  LookupSource: 'MultiAddress',
  OpaquePeerId: 'Vec<u8>',
  AccountInfo: 'AccountInfoWithDualRefCount',
  TAssetBalance: 'u128',
  AssetId: 'u64',
  AssetDetails: {
    owner: 'AccountId',
    issuer: 'AccountId',
    admin: 'AccountId',
    freezer: 'AccountId',
    supply: 'Balance',
    deposit: 'DepositBalance',
    max_zombies: 'u32',
    min_balance: 'Balance',
    zombies: 'u32',
    accounts: 'u32',
    is_frozen: 'bool'
  },
  AssetMetadata: {
    deposit: 'DepositBalance',
    name: 'Vec<u8>',
    symbol: 'Vec<u8>',
    decimals: 'u8'
  },
  LocId: 'u128',
  LegalOfficerCaseOf: {
    owner: 'AccountId',
    requester: 'Requester',
    metadata: 'Vec<MetadataItem>',
    files: 'Vec<File>',
    closed: 'bool',
    loc_type: 'LocType',
    links: 'Vec<LocLink>',
    void_info: 'Option<LocVoidInfo<LocId>>',
    replacer_of: 'Option<LocId>',
    collection_last_block_submission: 'Option<BlockNumber>',
    collection_max_size: 'Option<CollectionSize>',
    collection_can_upload: 'bool'
  },
  MetadataItem: {
    name: 'Vec<u8>',
    value: 'Vec<u8>',
    submitter: 'AccountId'
  },
  LocType: {
    _enum: [
      'Transaction',
      'Identity',
      'Collection'
    ]
  },
  LocLink: {
    id: 'LocId',
    nature: 'Vec<u8>'
  },
  File: {
    hash: 'Hash',
    nature: 'Vec<u8>',
    submitter: 'AccountId'
  },
  LocVoidInfo: {
    replacer: 'Option<LocId>'
  },
  StorageVersion: {
    _enum: [
      'V1',
      'V2MakeLocVoid',
      'V3RequesterEnum',
      'V4ItemSubmitter',
      'V5Collection',
      'V6ItemUpload',
      'V7ItemToken'
    ]
  },
  Requester: {
    _enum: {
      None: null,
      Account: 'AccountId',
      Loc: 'LocId'
    }
  },
  CollectionSize: 'u32',
  CollectionItemId: 'Hash',
  CollectionItem: {
    description: 'Vec<u8>',
    files: 'Vec<CollectionItemFile<Hash>>',
    token: 'Option<CollectionItemToken>',
    restricted_delivery: 'bool'
  },
  CollectionItemFile: {
    name: 'Vec<u8>',
    content_type: 'Vec<u8>',
    fileSize: 'u32',
    hash: 'Hash'
  },
  CollectionItemToken: {
    token_type: 'Vec<u8>',
    token_id: 'Vec<u8>'
  }
};

const definitions: OverrideBundleDefinition = {
  alias: {
    loAuthorityList: {
      StorageVersion: 'LoAuthorityListStorageVersion'
    }
  },
  types: [
    {
      minmax: [0, 109],
      types: {
        ...defaultTypesUpTo109,
        ...logionSession.types
      }
    },
    {
      minmax: [110, 111],
      types: {
        ...defaultTypesUpTo111,
        ...logionSession.types
      }
    },
    {
      minmax: [112, 116],
      types: {
        ...defaultTypesUpTo116,
        ...logionSession.types
      }
    },
    {
      // Latest
      minmax: [117, undefined],
      types: {
        ...logionDefault.types,
        ...logionRuntime.types,
        ...logionSession.types
      } as RegistryTypes
    }
  ]
};

export default definitions;
