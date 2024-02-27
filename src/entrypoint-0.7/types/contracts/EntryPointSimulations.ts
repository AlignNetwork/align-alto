export const EntryPointSimulationsAbi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "success",
                type: "bool"
            },
            {
                internalType: "bytes",
                name: "ret",
                type: "bytes"
            }
        ],
        name: "DelegateAndRevert",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "opIndex",
                type: "uint256"
            },
            {
                internalType: "string",
                name: "reason",
                type: "string"
            }
        ],
        name: "FailedOp",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "opIndex",
                type: "uint256"
            },
            {
                internalType: "string",
                name: "reason",
                type: "string"
            },
            {
                internalType: "bytes",
                name: "inner",
                type: "bytes"
            }
        ],
        name: "FailedOpWithRevert",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "returnData",
                type: "bytes"
            }
        ],
        name: "PostOpReverted",
        type: "error"
    },
    {
        inputs: [],
        name: "ReentrancyGuardReentrantCall",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address"
            }
        ],
        name: "SenderAddressResult",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "aggregator",
                type: "address"
            }
        ],
        name: "SignatureValidationFailed",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "targetSuccess",
                type: "bool"
            },
            {
                internalType: "bytes",
                name: "targetResult",
                type: "bytes"
            }
        ],
        name: "TargetCallResult",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "factory",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "paymaster",
                type: "address"
            }
        ],
        name: "AccountDeployed",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [],
        name: "BeforeExecution",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalDeposit",
                type: "uint256"
            }
        ],
        name: "Deposited",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nonce",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "revertReason",
                type: "bytes"
            }
        ],
        name: "PostOpRevertReason",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "aggregator",
                type: "address"
            }
        ],
        name: "SignatureAggregatorChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalStaked",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "unstakeDelaySec",
                type: "uint256"
            }
        ],
        name: "StakeLocked",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "withdrawTime",
                type: "uint256"
            }
        ],
        name: "StakeUnlocked",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "withdrawAddress",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "StakeWithdrawn",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "paymaster",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nonce",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "bool",
                name: "success",
                type: "bool"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "actualGasCost",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "actualGasUsed",
                type: "uint256"
            }
        ],
        name: "UserOperationEvent",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nonce",
                type: "uint256"
            }
        ],
        name: "UserOperationPrefundTooLow",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nonce",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "revertReason",
                type: "bytes"
            }
        ],
        name: "UserOperationRevertReason",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "withdrawAddress",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "Withdrawn",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "unstakeDelaySec",
                type: "uint32"
            }
        ],
        name: "addStake",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }
        ],
        name: "delegateAndRevert",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "depositTo",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "deposits",
        outputs: [
            {
                internalType: "uint256",
                name: "deposit",
                type: "uint256"
            },
            {
                internalType: "bool",
                name: "staked",
                type: "bool"
            },
            {
                internalType: "uint112",
                name: "stake",
                type: "uint112"
            },
            {
                internalType: "uint32",
                name: "unstakeDelaySec",
                type: "uint32"
            },
            {
                internalType: "uint48",
                name: "withdrawTime",
                type: "uint48"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "getDepositInfo",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "deposit",
                        type: "uint256"
                    },
                    {
                        internalType: "bool",
                        name: "staked",
                        type: "bool"
                    },
                    {
                        internalType: "uint112",
                        name: "stake",
                        type: "uint112"
                    },
                    {
                        internalType: "uint32",
                        name: "unstakeDelaySec",
                        type: "uint32"
                    },
                    {
                        internalType: "uint48",
                        name: "withdrawTime",
                        type: "uint48"
                    }
                ],
                internalType: "struct IStakeManager.DepositInfo",
                name: "info",
                type: "tuple"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                internalType: "uint192",
                name: "key",
                type: "uint192"
            }
        ],
        name: "getNonce",
        outputs: [
            {
                internalType: "uint256",
                name: "nonce",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "initCode",
                type: "bytes"
            }
        ],
        name: "getSenderAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes32",
                        name: "accountGasLimits",
                        type: "bytes32"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes32",
                        name: "gasFees",
                        type: "bytes32"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }
                ],
                internalType: "struct PackedUserOperation",
                name: "userOp",
                type: "tuple"
            }
        ],
        name: "getUserOpHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "sender",
                                type: "address"
                            },
                            {
                                internalType: "uint256",
                                name: "nonce",
                                type: "uint256"
                            },
                            {
                                internalType: "bytes",
                                name: "initCode",
                                type: "bytes"
                            },
                            {
                                internalType: "bytes",
                                name: "callData",
                                type: "bytes"
                            },
                            {
                                internalType: "bytes32",
                                name: "accountGasLimits",
                                type: "bytes32"
                            },
                            {
                                internalType: "uint256",
                                name: "preVerificationGas",
                                type: "uint256"
                            },
                            {
                                internalType: "bytes32",
                                name: "gasFees",
                                type: "bytes32"
                            },
                            {
                                internalType: "bytes",
                                name: "paymasterAndData",
                                type: "bytes"
                            },
                            {
                                internalType: "bytes",
                                name: "signature",
                                type: "bytes"
                            }
                        ],
                        internalType: "struct PackedUserOperation[]",
                        name: "userOps",
                        type: "tuple[]"
                    },
                    {
                        internalType: "contract IAggregator",
                        name: "aggregator",
                        type: "address"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }
                ],
                internalType: "struct IEntryPoint.UserOpsPerAggregator[]",
                name: "opsPerAggregator",
                type: "tuple[]"
            },
            {
                internalType: "address payable",
                name: "beneficiary",
                type: "address"
            }
        ],
        name: "handleAggregatedOps",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes32",
                        name: "accountGasLimits",
                        type: "bytes32"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes32",
                        name: "gasFees",
                        type: "bytes32"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }
                ],
                internalType: "struct PackedUserOperation[]",
                name: "ops",
                type: "tuple[]"
            },
            {
                internalType: "address payable",
                name: "beneficiary",
                type: "address"
            }
        ],
        name: "handleOps",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint192",
                name: "key",
                type: "uint192"
            }
        ],
        name: "incrementNonce",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "callData",
                type: "bytes"
            },
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "sender",
                                type: "address"
                            },
                            {
                                internalType: "uint256",
                                name: "nonce",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "verificationGasLimit",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "callGasLimit",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "paymasterVerificationGasLimit",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "paymasterPostOpGasLimit",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "preVerificationGas",
                                type: "uint256"
                            },
                            {
                                internalType: "address",
                                name: "paymaster",
                                type: "address"
                            },
                            {
                                internalType: "uint256",
                                name: "maxFeePerGas",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "maxPriorityFeePerGas",
                                type: "uint256"
                            }
                        ],
                        internalType: "struct EntryPoint.MemoryUserOp",
                        name: "mUserOp",
                        type: "tuple"
                    },
                    {
                        internalType: "bytes32",
                        name: "userOpHash",
                        type: "bytes32"
                    },
                    {
                        internalType: "uint256",
                        name: "prefund",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "contextOffset",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "preOpGas",
                        type: "uint256"
                    }
                ],
                internalType: "struct EntryPoint.UserOpInfo",
                name: "opInfo",
                type: "tuple"
            },
            {
                internalType: "bytes",
                name: "context",
                type: "bytes"
            }
        ],
        name: "innerHandleOp",
        outputs: [
            {
                internalType: "uint256",
                name: "actualGasCost",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "uint192",
                name: "",
                type: "uint192"
            }
        ],
        name: "nonceSequenceNumber",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes32",
                        name: "accountGasLimits",
                        type: "bytes32"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes32",
                        name: "gasFees",
                        type: "bytes32"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }
                ],
                internalType: "struct PackedUserOperation",
                name: "op",
                type: "tuple"
            },
            {
                internalType: "address",
                name: "target",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "targetCallData",
                type: "bytes"
            }
        ],
        name: "simulateCallData",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes32",
                        name: "accountGasLimits",
                        type: "bytes32"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes32",
                        name: "gasFees",
                        type: "bytes32"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }
                ],
                internalType: "struct PackedUserOperation",
                name: "op",
                type: "tuple"
            }
        ],
        name: "simulateHandleOp",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "preOpGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "paid",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "accountValidationData",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "paymasterValidationData",
                        type: "uint256"
                    },
                    {
                        internalType: "bool",
                        name: "targetSuccess",
                        type: "bool"
                    },
                    {
                        internalType: "bytes",
                        name: "targetResult",
                        type: "bytes"
                    }
                ],
                internalType: "struct IEntryPointSimulations.ExecutionResult",
                name: "",
                type: "tuple"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes32",
                        name: "accountGasLimits",
                        type: "bytes32"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes32",
                        name: "gasFees",
                        type: "bytes32"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }
                ],
                internalType: "struct PackedUserOperation",
                name: "userOp",
                type: "tuple"
            }
        ],
        name: "simulateValidation",
        outputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "preOpGas",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "prefund",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "accountValidationData",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "paymasterValidationData",
                                type: "uint256"
                            },
                            {
                                internalType: "bytes",
                                name: "paymasterContext",
                                type: "bytes"
                            }
                        ],
                        internalType: "struct IEntryPoint.ReturnInfo",
                        name: "returnInfo",
                        type: "tuple"
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "stake",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "unstakeDelaySec",
                                type: "uint256"
                            }
                        ],
                        internalType: "struct IStakeManager.StakeInfo",
                        name: "senderInfo",
                        type: "tuple"
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "stake",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "unstakeDelaySec",
                                type: "uint256"
                            }
                        ],
                        internalType: "struct IStakeManager.StakeInfo",
                        name: "factoryInfo",
                        type: "tuple"
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "stake",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "unstakeDelaySec",
                                type: "uint256"
                            }
                        ],
                        internalType: "struct IStakeManager.StakeInfo",
                        name: "paymasterInfo",
                        type: "tuple"
                    },
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "aggregator",
                                type: "address"
                            },
                            {
                                components: [
                                    {
                                        internalType: "uint256",
                                        name: "stake",
                                        type: "uint256"
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "unstakeDelaySec",
                                        type: "uint256"
                                    }
                                ],
                                internalType: "struct IStakeManager.StakeInfo",
                                name: "stakeInfo",
                                type: "tuple"
                            }
                        ],
                        internalType: "struct IEntryPoint.AggregatorStakeInfo",
                        name: "aggregatorInfo",
                        type: "tuple"
                    }
                ],
                internalType: "struct IEntryPointSimulations.ValidationResult",
                name: "",
                type: "tuple"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4"
            }
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "unlockStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "withdrawAddress",
                type: "address"
            }
        ],
        name: "withdrawStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "withdrawAddress",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "withdrawAmount",
                type: "uint256"
            }
        ],
        name: "withdrawTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        stateMutability: "payable",
        type: "receive"
    }
]

export const EntryPointSimulations_bytecode =
    "0x60a060405260405162000012906200009d565b604051809103906000f0801580156200002f573d6000803e3d6000fd5b506001600160a01b0390811660805260408051808201825260008082528251808401909352808352602080840191825282018390529051600380546001600160a01b031916919094161790925551600455516005553480156200009157600080fd5b506001600255620000ab565b610233806200519583390190565b6080516150d1620000c4600039600050506150d16000f3fe60806040526004361061016d5760003560e01c806370a08231116100cb578063bb9fe6bf1161007f578063c5f996e611610059578063c5f996e6146105b9578063dbed18e0146105d9578063fc7e286d146105f957600080fd5b8063bb9fe6bf14610557578063c23a5cea1461056c578063c3bce0091461058c57600080fd5b8063850aaf62116100b0578063850aaf62146105045780639b249f6914610524578063b760faf91461054457600080fd5b806370a08231146104a1578063765e827f146104e457600080fd5b8063205c28781161012257806335567e1a1161010757806335567e1a146102905780635287ce12146103255780635895273b1461047457600080fd5b8063205c28781461025057806322cdde4c1461027057600080fd5b80630396cb60116101535780630396cb60146101e55780630bd28e3b146101f85780631b2e01b81461021857600080fd5b806242dc531461018257806301ffc9a7146101b557600080fd5b3661017d5761017b336106cb565b005b600080fd5b34801561018e57600080fd5b506101a261019d36600461420a565b6106ec565b6040519081526020015b60405180910390f35b3480156101c157600080fd5b506101d56101d03660046142ca565b6108b5565b60405190151581526020016101ac565b61017b6101f336600461430c565b610a32565b34801561020457600080fd5b5061017b61021336600461435a565b610dc8565b34801561022457600080fd5b506101a2610233366004614375565b600160209081526000928352604080842090915290825290205481565b34801561025c57600080fd5b5061017b61026b3660046143aa565b610e10565b34801561027c57600080fd5b506101a261028b3660046143ef565b610fba565b34801561029c57600080fd5b506101a26102ab366004614375565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260016020908152604080832077ffffffffffffffffffffffffffffffffffffffffffffffff8516845290915290819020549082901b7fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000161792915050565b34801561033157600080fd5b50610412610340366004614424565b6040805160a0810182526000808252602082018190529181018290526060810182905260808101919091525073ffffffffffffffffffffffffffffffffffffffff1660009081526020818152604091829020825160a0810184528154815260019091015460ff811615159282019290925261010082046dffffffffffffffffffffffffffff16928101929092526f01000000000000000000000000000000810463ffffffff166060830152730100000000000000000000000000000000000000900465ffffffffffff16608082015290565b6040516101ac9190600060a082019050825182526020830151151560208301526dffffffffffffffffffffffffffff604084015116604083015263ffffffff606084015116606083015265ffffffffffff608084015116608083015292915050565b34801561048057600080fd5b5061049461048f3660046143ef565b610ffc565b6040516101ac91906144af565b3480156104ad57600080fd5b506101a26104bc366004614424565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b3480156104f057600080fd5b5061017b6104ff366004614543565b6110f1565b34801561051057600080fd5b5061017b61051f36600461459a565b61126e565b34801561053057600080fd5b5061017b61053f3660046145ef565b611313565b61017b610552366004614424565b6106cb565b34801561056357600080fd5b5061017b6113fe565b34801561057857600080fd5b5061017b610587366004614424565b6115de565b34801561059857600080fd5b506105ac6105a73660046143ef565b6118cb565b6040516101ac9190614631565b3480156105c557600080fd5b5061017b6105d4366004614711565b611bcf565b3480156105e557600080fd5b5061017b6105f4366004614543565b611cb5565b34801561060557600080fd5b50610681610614366004614424565b6000602081905290815260409020805460019091015460ff81169061010081046dffffffffffffffffffffffffffff16906f01000000000000000000000000000000810463ffffffff1690730100000000000000000000000000000000000000900465ffffffffffff1685565b6040805195865293151560208601526dffffffffffffffffffffffffffff9092169284019290925263ffffffff909116606083015265ffffffffffff16608082015260a0016101ac565b60015b60058110156106df576001016106ce565b6106e882612161565b5050565b6000805a9050333014610760576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4141393220696e7465726e616c2063616c6c206f6e6c7900000000000000000060448201526064015b60405180910390fd5b8451606081015160a082015181016127100160405a603f028161078557610785614773565b0410156107b6577fdeaddead0000000000000000000000000000000000000000000000000000000060005260206000fd5b8751600090156108575760006107d3846000015160008c866121b7565b9050806108555760006107e76108006121cf565b80519091501561084f57846000015173ffffffffffffffffffffffffffffffffffffffff168a602001517f1c4fada7374c0a9ee8841fc38afe82932dc0f8e69012e927f061a8bae611a2018760200151846040516108469291906147a2565b60405180910390a35b60019250505b505b600088608001515a86030190506108a7828a8a8a8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508792506121fb915050565b9a9950505050505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f60fc6b6e00000000000000000000000000000000000000000000000000000000148061094857507fffffffff0000000000000000000000000000000000000000000000000000000082167f915074d800000000000000000000000000000000000000000000000000000000145b8061099457507fffffffff0000000000000000000000000000000000000000000000000000000082167fcf28ef9700000000000000000000000000000000000000000000000000000000145b806109e057507fffffffff0000000000000000000000000000000000000000000000000000000082167f3e84f02100000000000000000000000000000000000000000000000000000000145b80610a2c57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b33600090815260208190526040902063ffffffff8216610aae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f6d757374207370656369667920756e7374616b652064656c61790000000000006044820152606401610757565b600181015463ffffffff6f0100000000000000000000000000000090910481169083161015610b39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f63616e6e6f7420646563726561736520756e7374616b652074696d65000000006044820152606401610757565b6001810154600090610b6190349061010090046dffffffffffffffffffffffffffff166147ea565b905060008111610bcd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f207374616b652073706563696669656400000000000000000000000000006044820152606401610757565b6dffffffffffffffffffffffffffff811115610c45576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f7374616b65206f766572666c6f770000000000000000000000000000000000006044820152606401610757565b6040805160a08101825283548152600160208083018281526dffffffffffffffffffffffffffff86811685870190815263ffffffff8a811660608801818152600060808a0181815233808352828a52918c90209a518b55965199909801805494519151965165ffffffffffff16730100000000000000000000000000000000000000027fffffffffffffff000000000000ffffffffffffffffffffffffffffffffffffff979094166f0100000000000000000000000000000002969096167fffffffffffffff00000000000000000000ffffffffffffffffffffffffffffff91909516610100027fffffffffffffffffffffffffffffffffff0000000000000000000000000000ff991515999099167fffffffffffffffffffffffffffffffffff00000000000000000000000000000090941693909317979097179190911691909117179055835185815290810192909252917fa5ae833d0bb1dcd632d98a8b70973e8516812898e19bf27b70071ebc8dc52c01910160405180910390a2505050565b33600090815260016020908152604080832077ffffffffffffffffffffffffffffffffffffffffffffffff851684529091528120805491610e08836147fd565b919050555050565b3360009081526020819052604090208054821115610e8a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f576974686472617720616d6f756e7420746f6f206c61726765000000000000006044820152606401610757565b8054610e97908390614835565b81556040805173ffffffffffffffffffffffffffffffffffffffff851681526020810184905233917fd1c19fbcd4551a5edfb66d43d2e337c04837afda3482b42bdf569a8fccdae5fb910160405180910390a260008373ffffffffffffffffffffffffffffffffffffffff168360405160006040518083038185875af1925050503d8060008114610f44576040519150601f19603f3d011682016040523d82523d6000602084013e610f49565b606091505b5050905080610fb4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6661696c656420746f20776974686472617700000000000000000000000000006044820152606401610757565b50505050565b6000610fc582612423565b6040805160208101929092523090820152466060820152608001604051602081830303815290604052805190602001209050919050565b6110376040518060c0016040528060008152602001600081526020016000815260200160008152602001600015158152602001606081525090565b61103f61243c565b611047613dfc565b6110508361247d565b60008061105f600086856125f0565b9150915060006110716000878661284f565b90506040518060c00160405280856080015181526020018281526020018481526020018381526020016000151581526020016040518060400160405280600281526020017f30780000000000000000000000000000000000000000000000000000000000008152508152509450505050506110ec6001600255565b919050565b6110f961243c565b8160008167ffffffffffffffff81111561111557611115613fa8565b60405190808252806020026020018201604052801561114e57816020015b61113b613dfc565b8152602001906001900390816111335790505b50905060005b828110156111c757600082828151811061117057611170614848565b602002602001015190506000806111ab848a8a8781811061119357611193614848565b90506020028101906111a59190614877565b856125f0565b915091506111bc8483836000612c25565b505050600101611154565b506040516000907fbb47ee3e183a558b1a2ff0874b079f3fc5478b7454eacf2bfc5af2ff5878f972908290a160005b83811015611251576112458188888481811061121457611214614848565b90506020028101906112269190614877565b85848151811061123857611238614848565b602002602001015161284f565b909101906001016111f6565b5061125c8482612e7a565b5050506112696001600255565b505050565b6000808473ffffffffffffffffffffffffffffffffffffffff1684846040516112989291906148b5565b600060405180830381855af49150503d80600081146112d3576040519150601f19603f3d011682016040523d82523d6000602084013e6112d8565b606091505b509150915081816040517f994105540000000000000000000000000000000000000000000000000000000081526004016107579291906148c5565b600061133460065473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1663570e1a3684846040518363ffffffff1660e01b815260040161136e929190614929565b6020604051808303816000875af115801561138d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b1919061493d565b6040517f6ca7b80600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82166004820152909150602401610757565b336000908152602081905260408120600181015490916f0100000000000000000000000000000090910463ffffffff169003611496576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6e6f74207374616b6564000000000000000000000000000000000000000000006044820152606401610757565b600181015460ff16611504576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f616c726561647920756e7374616b696e670000000000000000000000000000006044820152606401610757565b600181015460009061152f906f01000000000000000000000000000000900463ffffffff164261495a565b6001830180547fffffffffffffff000000000000ffffffffffffffffffffffffffffffffffff001673010000000000000000000000000000000000000065ffffffffffff84169081027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169190911790915560405190815290915033907ffa9b3c14cc825c412c9ed81b3ba365a5b459439403f18829e572ed53a4180f0a906020015b60405180910390a25050565b336000908152602081905260409020600181015461010090046dffffffffffffffffffffffffffff168061166e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4e6f207374616b6520746f2077697468647261770000000000000000000000006044820152606401610757565b6001820154730100000000000000000000000000000000000000900465ffffffffffff166116f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f6d7573742063616c6c20756e6c6f636b5374616b6528292066697273740000006044820152606401610757565b60018201544273010000000000000000000000000000000000000090910465ffffffffffff161115611786576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f5374616b65207769746864726177616c206973206e6f742064756500000000006044820152606401610757565b6001820180547fffffffffffffff000000000000000000000000000000000000000000000000ff1690556040805173ffffffffffffffffffffffffffffffffffffffff851681526020810183905233917fb7c918e0e249f999e965cafeb6c664271b3f4317d296461500e71da39f0cbda3910160405180910390a260008373ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461185b576040519150601f19603f3d011682016040523d82523d6000602084013e611860565b606091505b5050905080610fb4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6661696c656420746f207769746864726177207374616b6500000000000000006044820152606401610757565b6118d3613eae565b6118db613dfc565b6118e48361247d565b6000806118f3600086856125f0565b845160e001516040805180820182526000808252602080830182815273ffffffffffffffffffffffffffffffffffffffff95861683528282528483206001908101546dffffffffffffffffffffffffffff6101008083048216885263ffffffff6f010000000000000000000000000000009384900481169095528e51518951808b018b5288815280880189815291909b1688528787528988209094015490810490911689520490911690528351808501909452818452830152939550919350903660006119c360408b018b614980565b9092509050600060148210156119da5760006119f5565b6119e86014600084866149e5565b6119f191614a0f565b60601c5b6040805180820182526000808252602080830182815273ffffffffffffffffffffffffffffffffffffffff86168352908290529290206001015461010081046dffffffffffffffffffffffffffff1682526f01000000000000000000000000000000900463ffffffff169091529091509350505050600085905060006040518060a001604052808960800151815260200189604001518152602001888152602001878152602001611aa78a6060015190565b905260408051808201825260035473ffffffffffffffffffffffffffffffffffffffff908116825282518084019093526004548352600554602084810191909152820192909252919250831615801590611b18575060018373ffffffffffffffffffffffffffffffffffffffff1614155b15611b9c5760408051808201825273ffffffffffffffffffffffffffffffffffffffff851680825282518084018452600080825260208083018281529382528181529490206001015461010081046dffffffffffffffffffffffffffff1682526f01000000000000000000000000000000900463ffffffff16909152909182015290505b6040805160a081018252928352602083019590955293810192909252506060810192909252608082015295945050505050565b611bd7613dfc565b611be08561247d565b611bec600086836125f0565b5060009050606073ffffffffffffffffffffffffffffffffffffffff861615611c7f578573ffffffffffffffffffffffffffffffffffffffff168585604051611c369291906148b5565b6000604051808303816000865af19150503d8060008114611c73576040519150601f19603f3d011682016040523d82523d6000602084013e611c78565b606091505b5090925090505b81816040517fd12c41340000000000000000000000000000000000000000000000000000000081526004016107579291906148c5565b611cbd61243c565b816000805b82811015611eaf5736868683818110611cdd57611cdd614848565b9050602002810190611cef9190614a57565b9050366000611cfe8380614a8b565b90925090506000611d156040850160208601614424565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff73ffffffffffffffffffffffffffffffffffffffff821601611db6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4141393620696e76616c69642061676772656761746f720000000000000000006044820152606401610757565b73ffffffffffffffffffffffffffffffffffffffff811615611e935773ffffffffffffffffffffffffffffffffffffffff8116632dd811338484611dfd6040890189614980565b6040518563ffffffff1660e01b8152600401611e1c9493929190614c43565b60006040518083038186803b158015611e3457600080fd5b505afa925050508015611e45575060015b611e93576040517f86a9f75000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82166004820152602401610757565b611e9d82876147ea565b95505060019093019250611cc2915050565b5060008167ffffffffffffffff811115611ecb57611ecb613fa8565b604051908082528060200260200182016040528015611f0457816020015b611ef1613dfc565b815260200190600190039081611ee95790505b5090506000805b84811015611fe15736888883818110611f2657611f26614848565b9050602002810190611f389190614a57565b9050366000611f478380614a8b565b90925090506000611f5e6040850160208601614424565b90508160005b81811015611fcf576000898981518110611f8057611f80614848565b60200260200101519050600080611fa38b89898781811061119357611193614848565b91509150611fb384838389612c25565b8a611fbd816147fd565b9b505060019093019250611f64915050565b505060019094019350611f0b92505050565b506040517fbb47ee3e183a558b1a2ff0874b079f3fc5478b7454eacf2bfc5af2ff5878f97290600090a150600080805b8581101561211c573689898381811061202c5761202c614848565b905060200281019061203e9190614a57565b90506120506040820160208301614424565b73ffffffffffffffffffffffffffffffffffffffff167f575ff3acadd5ab348fe1855e217e0f3678f8d767d7494c9f9fefbee2e17cca4d60405160405180910390a236600061209f8380614a8b565b90925090508060005b8181101561210b576120ea888585848181106120c6576120c6614848565b90506020028101906120d89190614877565b8b8b8151811061123857611238614848565b6120f490886147ea565b965087612100816147fd565b9850506001016120a8565b505060019093019250612011915050565b506040516000907f575ff3acadd5ab348fe1855e217e0f3678f8d767d7494c9f9fefbee2e17cca4d908290a26121528682612e7a565b50505050506112696001600255565b600061216d8234612fc1565b90508173ffffffffffffffffffffffffffffffffffffffff167f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c4826040516115d291815260200190565b6000806000845160208601878987f195945050505050565b60603d828111156121dd5750815b604051602082018101604052818152816000602083013e9392505050565b6000805a85519091506000908161221182613001565b60e083015190915073ffffffffffffffffffffffffffffffffffffffff811661223d5782519350612338565b80935060008851111561233857868202955060028a600281111561226357612263614cfa565b146123385760a08301516040517f7c627b2100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff831691637c627b21916122c5908e908d908c908990600401614d29565b600060405180830381600088803b1580156122df57600080fd5b5087f1935050505080156122f1575060015b6123385760006123026108006121cf565b9050806040517fad7954bc0000000000000000000000000000000000000000000000000000000081526004016107579190614d8c565b5a60a0840151606085015160808c01519288039990990198019088038082111561236b576064600a828403020498909801975b505060408901518783029650868110156123e05760028b600281111561239357612393614cfa565b036123b6578096506123a48a613033565b6123b18a6000898b61308f565b612415565b7fdeadaa510000000000000000000000000000000000000000000000000000000060005260206000fd5b8681036123ed8682612fc1565b506000808d600281111561240357612403614cfa565b1490506124128c828b8d61308f565b50505b505050505050949350505050565b600061242e82613117565b805190602001209050919050565b6002805403612477576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60028055565b61257d6040517fd69400000000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003060601b1660228201527f01000000000000000000000000000000000000000000000000000000000000006036820152600090603701604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00181529190528051602090910120600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff90921691909117905550565b60006125ae61258f6040840184614980565b61259c6020860186614424565b6125a960e0870187614980565b6131dc565b905080516000146106e8576000816040517f220266b60000000000000000000000000000000000000000000000000000000081526004016107579291906147a2565b60008060005a845190915061260586826132c5565b61260e86610fba565b6020860152604081015161012082015161010083015160a08401516080850151606086015160c0870151861717171717176effffffffffffffffffffffffffffff8111156126b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f41413934206761732076616c756573206f766572666c6f7700000000000000006044820152606401610757565b60006126e78460c081015160a08201516080830151606084015160408501516101009095015194010101010290565b90506126f68a8a8a8487613410565b965061270a84600001518560200151613651565b61277957896040517f220266b6000000000000000000000000000000000000000000000000000000008152600401610757918152604060208201819052601a908201527f4141323520696e76616c6964206163636f756e74206e6f6e6365000000000000606082015260800190565b825a860311156127ee57896040517f220266b6000000000000000000000000000000000000000000000000000000008152600401610757918152604060208201819052601e908201527f41413236206f76657220766572696669636174696f6e4761734c696d69740000606082015260800190565b60e084015160609073ffffffffffffffffffffffffffffffffffffffff16156128225761281d8b8b8b856136ac565b975090505b604089018290528060608a015260a08a01355a870301896080018181525050505050505050935093915050565b6000805a90506000612862846060015190565b604051909150600090368261287a60608a018a614980565b915091506060600082600381111561289157843591505b507f72288ed1000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008216016129d15760008b8b602001516040516024016128f4929190614d9f565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f8dd7712f000000000000000000000000000000000000000000000000000000001790525190915030906242dc53906129879084908f908d90602401614e85565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050925050612a48565b3073ffffffffffffffffffffffffffffffffffffffff166242dc5385858d8b604051602401612a039493929190614ec5565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505091505b602060008351602085016000305af19550600051985084604052505050505080612c1b5760003d80602003612a835760206000803e60005191505b507fdeaddead000000000000000000000000000000000000000000000000000000008103612b1657876040517f220266b6000000000000000000000000000000000000000000000000000000008152600401610757918152604060208201819052600f908201527f41413935206f7574206f66206761730000000000000000000000000000000000606082015260800190565b7fdeadaa51000000000000000000000000000000000000000000000000000000008103612b8057600086608001515a612b4f9087614835565b612b5991906147ea565b6040880151909150612b6a88613033565b612b77886000838561308f565b9550612c199050565b8551805160208089015192015173ffffffffffffffffffffffffffffffffffffffff90911691907ff62676f440ff169a3a9afdbf812e89e7f95975ee8e5c31214ffdef631c5f479290612bd46108006121cf565b604051612be29291906147a2565b60405180910390a3600086608001515a612bfc9087614835565b612c0691906147ea565b9050612c1560028886846121fb565b9550505b505b5050509392505050565b600080612c3185613903565b915091508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614612cd357856040517f220266b60000000000000000000000000000000000000000000000000000000081526004016107579181526040602082018190526014908201527f41413234207369676e6174757265206572726f72000000000000000000000000606082015260800190565b8015612d4457856040517f220266b60000000000000000000000000000000000000000000000000000000081526004016107579181526040602082018190526017908201527f414132322065787069726564206f72206e6f7420647565000000000000000000606082015260800190565b6000612d4f85613903565b9250905073ffffffffffffffffffffffffffffffffffffffff811615612dda57866040517f220266b60000000000000000000000000000000000000000000000000000000081526004016107579181526040602082018190526014908201527f41413334207369676e6174757265206572726f72000000000000000000000000606082015260800190565b8115612e7157866040517f220266b60000000000000000000000000000000000000000000000000000000081526004016107579181526040602082018190526021908201527f41413332207061796d61737465722065787069726564206f72206e6f7420647560608201527f6500000000000000000000000000000000000000000000000000000000000000608082015260a00190565b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216612ef7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4141393020696e76616c69642062656e656669636961727900000000000000006044820152606401610757565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114612f51576040519150601f19603f3d011682016040523d82523d6000602084013e612f56565b606091505b5050905080611269576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f41413931206661696c65642073656e6420746f2062656e6566696369617279006044820152606401610757565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040812080548290612ff59085906147ea565b91829055509392505050565b6101008101516101208201516000919080820361301f575092915050565b61302b82488301613956565b949350505050565b805180516020808401519281015160405190815273ffffffffffffffffffffffffffffffffffffffff90921692917f67b4fa9642f42120bf031f3051d1824b0fe25627945b27b8a6a65d5761d5482e910160405180910390a350565b835160e0810151815160208088015193015160405173ffffffffffffffffffffffffffffffffffffffff9384169492909316927f49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f916131099189908990899093845291151560208401526040830152606082015260800190565b60405180910390a450505050565b60608135602083013560006131376131326040870187614980565b61396e565b9050600061314b6131326060880188614980565b9050608086013560a087013560c0880135600061316e61313260e08c018c614980565b6040805173ffffffffffffffffffffffffffffffffffffffff9a909a1660208b015289810198909852606089019690965250608087019390935260a086019190915260c085015260e08401526101008084019190915281518084039091018152610120909201905292915050565b606084158015613201575073ffffffffffffffffffffffffffffffffffffffff84163b155b15613240575060408051808201909152601981527f41413230206163636f756e74206e6f74206465706c6f7965640000000000000060208201526132bc565b601482106132ab57600061325760148285876149e5565b61326091614a0f565b60601c9050803b6000036132a957505060408051808201909152601b81527f41413330207061796d6173746572206e6f74206465706c6f796564000000000060208201526132bc565b505b506040805160208101909152600081525b95945050505050565b6132d26020830183614424565b73ffffffffffffffffffffffffffffffffffffffff168152602082810135908201526fffffffffffffffffffffffffffffffff6080808401358281166060850152811c604084015260a084013560c0808501919091528401359182166101008401521c61012082015236600061334b60e0850185614980565b909250905080156133f55760348110156133c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f4141393320696e76616c6964207061796d6173746572416e64446174610000006044820152606401610757565b6133cb8282613981565b60a0860152608085015273ffffffffffffffffffffffffffffffffffffffff1660e0840152610fb4565b600060e084018190526080840181905260a084015250505050565b825180516000919061342f888761342a60408b018b614980565b6139f2565b60e0820151600073ffffffffffffffffffffffffffffffffffffffff821661348d5773ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205487811161348657808803613489565b60005b9150505b60208801516040517f19822f7c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516916319822f7c9189916134e9918e91908790600401614efc565b60206040518083038160008887f193505050508015613543575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261354091810190614f21565b60015b61358757896135536108006121cf565b6040517f65c8fd4d000000000000000000000000000000000000000000000000000000008152600401610757929190614f3a565b945073ffffffffffffffffffffffffffffffffffffffff82166136445773ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902080548089111561363e578b6040517f220266b60000000000000000000000000000000000000000000000000000000081526004016107579181526040602082018190526017908201527f41413231206469646e2774207061792070726566756e64000000000000000000606082015260800190565b88900390555b5050505095945050505050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260016020908152604080832084821c808552925282208054849167ffffffffffffffff831691908561369e836147fd565b909155501495945050505050565b60606000805a855160e081015173ffffffffffffffffffffffffffffffffffffffff81166000908152602081905260409020805493945091929091908781101561375b578a6040517f220266b6000000000000000000000000000000000000000000000000000000008152600401610757918152604060208201819052601e908201527f41413331207061796d6173746572206465706f73697420746f6f206c6f770000606082015260800190565b87810382600001819055506000846080015190508373ffffffffffffffffffffffffffffffffffffffff166352b7512c828d8d602001518d6040518563ffffffff1660e01b81526004016137b193929190614efc565b60006040518083038160008887f19350505050801561381057506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261380d9190810190614f87565b60015b613854578b6138206108006121cf565b6040517f65c8fd4d000000000000000000000000000000000000000000000000000000008152600401610757929190615008565b9098509650805a870311156138f4578b6040517f220266b60000000000000000000000000000000000000000000000000000000081526004016107579181526040602082018190526027908201527f41413336206f766572207061796d6173746572566572696669636174696f6e4760608201527f61734c696d697400000000000000000000000000000000000000000000000000608082015260a00190565b50505050505094509492505050565b6000808260000361391957506000928392509050565b600061392484613d7e565b9050806040015165ffffffffffff1642118061394b5750806020015165ffffffffffff1642105b905194909350915050565b60008183106139655781613967565b825b9392505050565b6000604051828085833790209392505050565b6000808061399260148286886149e5565b61399b91614a0f565b60601c6139ac6024601487896149e5565b6139b591615055565b60801c6139c660346024888a6149e5565b6139cf91615055565b9194506fffffffffffffffffffffffffffffffff16925060801c90509250925092565b8015610fb45782515173ffffffffffffffffffffffffffffffffffffffff81163b15613a8357846040517f220266b6000000000000000000000000000000000000000000000000000000008152600401610757918152604060208201819052601f908201527f414131302073656e64657220616c726561647920636f6e737472756374656400606082015260800190565b6000613aa460065473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1663570e1a3686600001516040015186866040518463ffffffff1660e01b8152600401613ae7929190614929565b60206040518083038160008887f1158015613b06573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190613b2b919061493d565b905073ffffffffffffffffffffffffffffffffffffffff8116613bb357856040517f220266b6000000000000000000000000000000000000000000000000000000008152600401610757918152604060208201819052601b908201527f4141313320696e6974436f6465206661696c6564206f72204f4f470000000000606082015260800190565b8173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614613c5057856040517f220266b600000000000000000000000000000000000000000000000000000000815260040161075791815260406020808301829052908201527f4141313420696e6974436f6465206d7573742072657475726e2073656e646572606082015260800190565b8073ffffffffffffffffffffffffffffffffffffffff163b600003613cd957856040517f220266b600000000000000000000000000000000000000000000000000000000815260040161075791815260406020808301829052908201527f4141313520696e6974436f6465206d757374206372656174652073656e646572606082015260800190565b6000613ce860148286886149e5565b613cf191614a0f565b60601c90508273ffffffffffffffffffffffffffffffffffffffff1686602001517fd51a9c61267aa6196961883ecf5ff2da6619c37dac0fa92122513fb32c032d2d83896000015160e00151604051613d6d92919073ffffffffffffffffffffffffffffffffffffffff92831681529116602082015260400190565b60405180910390a350505050505050565b60408051606081018252600080825260208201819052918101919091528160a081901c65ffffffffffff8116600003613dba575065ffffffffffff5b6040805160608101825273ffffffffffffffffffffffffffffffffffffffff909316835260d09490941c602083015265ffffffffffff16928101929092525090565b6040518060a00160405280613e89604051806101400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b8152602001600080191681526020016000815260200160008152602001600081525090565b6040518060a00160405280613eeb6040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b8152602001613f0d604051806040016040528060008152602001600081525090565b8152602001613f2f604051806040016040528060008152602001600081525090565b8152602001613f51604051806040016040528060008152602001600081525090565b8152602001613f5e613f63565b905290565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001613f5e604051806040016040528060008152602001600081525090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160a0810167ffffffffffffffff81118282101715613ffa57613ffa613fa8565b60405290565b604051610140810167ffffffffffffffff81118282101715613ffa57613ffa613fa8565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561406b5761406b613fa8565b604052919050565b600067ffffffffffffffff82111561408d5761408d613fa8565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b73ffffffffffffffffffffffffffffffffffffffff811681146140db57600080fd5b50565b80356110ec816140b9565b60008183036101c08112156140fd57600080fd5b614105613fd7565b91506101408082121561411757600080fd5b61411f614000565b915061412a846140de565b82526020840135602083015260408401356040830152606084013560608301526080840135608083015260a084013560a083015260c084013560c083015261417460e085016140de565b60e0830152610100848101359083015261012080850135908301529082528201356020820152610160820135604082015261018082013560608201526101a0909101356080820152919050565b60008083601f8401126141d357600080fd5b50813567ffffffffffffffff8111156141eb57600080fd5b60208301915083602082850101111561420357600080fd5b9250929050565b600080600080610200858703121561422157600080fd5b843567ffffffffffffffff8082111561423957600080fd5b818701915087601f83011261424d57600080fd5b813561426061425b82614073565b614024565b81815289602083860101111561427557600080fd5b81602085016020830137600060208383010152809750505061429a88602089016140e9565b94506101e08701359150808211156142b157600080fd5b506142be878288016141c1565b95989497509550505050565b6000602082840312156142dc57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461396757600080fd5b60006020828403121561431e57600080fd5b813563ffffffff8116811461396757600080fd5b803577ffffffffffffffffffffffffffffffffffffffffffffffff811681146110ec57600080fd5b60006020828403121561436c57600080fd5b61396782614332565b6000806040838503121561438857600080fd5b8235614393816140b9565b91506143a160208401614332565b90509250929050565b600080604083850312156143bd57600080fd5b82356143c8816140b9565b946020939093013593505050565b600061012082840312156143e957600080fd5b50919050565b60006020828403121561440157600080fd5b813567ffffffffffffffff81111561441857600080fd5b61302b848285016143d6565b60006020828403121561443657600080fd5b8135613967816140b9565b60005b8381101561445c578181015183820152602001614444565b50506000910152565b6000815180845261447d816020860160208601614441565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526020820151604082015260408201516060820152606082015160808201526080820151151560a0820152600060a083015160c08084015261302b60e0840182614465565b60008083601f84011261451057600080fd5b50813567ffffffffffffffff81111561452857600080fd5b6020830191508360208260051b850101111561420357600080fd5b60008060006040848603121561455857600080fd5b833567ffffffffffffffff81111561456f57600080fd5b61457b868287016144fe565b909450925050602084013561458f816140b9565b809150509250925092565b6000806000604084860312156145af57600080fd5b83356145ba816140b9565b9250602084013567ffffffffffffffff8111156145d657600080fd5b6145e2868287016141c1565b9497909650939450505050565b6000806020838503121561460257600080fd5b823567ffffffffffffffff81111561461957600080fd5b614625858286016141c1565b90969095509350505050565b602080825282516101408383015280516101608401529081015161018083015260408101516101a083015260608101516101c08301526080015160a06101e0830152600090614684610200840182614465565b905060208401516146a2604085018280518252602090810151910152565b506040840151805160808581019190915260209182015160a08601526060860151805160c087015282015160e0860152850151805173ffffffffffffffffffffffffffffffffffffffff1661010086015280820151805161012087015290910151610140850152509392505050565b6000806000806060858703121561472757600080fd5b843567ffffffffffffffff8082111561473f57600080fd5b61474b888389016143d6565b95506020870135915061475d826140b9565b909350604086013590808211156142b157600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b82815260406020820152600061302b6040830184614465565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b80820180821115610a2c57610a2c6147bb565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361482e5761482e6147bb565b5060010190565b81810381811115610a2c57610a2c6147bb565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee18336030181126148ab57600080fd5b9190910192915050565b8183823760009101908152919050565b821515815260406020820152600061302b6040830184614465565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60208152600061302b6020830184866148e0565b60006020828403121561494f57600080fd5b8151613967816140b9565b65ffffffffffff818116838216019080821115614979576149796147bb565b5092915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126149b557600080fd5b83018035915067ffffffffffffffff8211156149d057600080fd5b60200191503681900382131561420357600080fd5b600080858511156149f557600080fd5b83861115614a0257600080fd5b5050820193919092039150565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008135818116916014851015614a4f5780818660140360031b1b83161692505b505092915050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa18336030181126148ab57600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112614ac057600080fd5b83018035915067ffffffffffffffff821115614adb57600080fd5b6020019150600581901b360382131561420357600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112614b2857600080fd5b830160208101925035905067ffffffffffffffff811115614b4857600080fd5b80360382131561420357600080fd5b6000610120614b8384614b69856140de565b73ffffffffffffffffffffffffffffffffffffffff169052565b60208301356020850152614b9a6040840184614af3565b826040870152614bad83870182846148e0565b92505050614bbe6060840184614af3565b8583036060870152614bd18382846148e0565b925050506080830135608085015260a083013560a085015260c083013560c0850152614c0060e0840184614af3565b85830360e0870152614c138382846148e0565b92505050610100614c2681850185614af3565b86840383880152614c388482846148e0565b979650505050505050565b6040808252810184905260006060600586901b830181019083018783805b89811015614ce3577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa087860301845282357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee18c3603018112614cc1578283fd5b614ccd868d8301614b57565b9550506020938401939290920191600101614c61565b505050508281036020840152614c388185876148e0565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600060038610614d62577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b85825260806020830152614d796080830186614465565b6040830194909452506060015292915050565b6020815260006139676020830184614465565b604081526000614db26040830185614b57565b90508260208301529392505050565b8051805173ffffffffffffffffffffffffffffffffffffffff1683526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151614e4060e085018273ffffffffffffffffffffffffffffffffffffffff169052565b5061010081810151908401526101209081015190830152602081015161014083015260408101516101608301526060810151610180830152608001516101a090910152565b6000610200808352614e9981840187614465565b9050614ea86020840186614dc1565b8281036101e0840152614ebb8185614465565b9695505050505050565b6000610200808352614eda81840187896148e0565b9050614ee96020840186614dc1565b8281036101e0840152614c388185614465565b606081526000614f0f6060830186614b57565b60208301949094525060400152919050565b600060208284031215614f3357600080fd5b5051919050565b82815260606020820152600d60608201527f4141323320726576657274656400000000000000000000000000000000000000608082015260a06040820152600061302b60a0830184614465565b60008060408385031215614f9a57600080fd5b825167ffffffffffffffff811115614fb157600080fd5b8301601f81018513614fc257600080fd5b8051614fd061425b82614073565b818152866020838501011115614fe557600080fd5b614ff6826020830160208601614441565b60209590950151949694955050505050565b82815260606020820152600d60608201527f4141333320726576657274656400000000000000000000000000000000000000608082015260a06040820152600061302b60a0830184614465565b7fffffffffffffffffffffffffffffffff000000000000000000000000000000008135818116916010851015614a4f5760109490940360031b84901b169092169291505056fea264697066735822122022e02178dc569768380168e9e3ea80c02f334e22212a424c7e3d8b24376c948964736f6c63430008170033608060405234801561001057600080fd5b50610213806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063570e1a3614610030575b600080fd5b61004361003e3660046100f9565b61006c565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b60008061007c601482858761016b565b61008591610195565b60601c90506000610099846014818861016b565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525084519495509360209350849250905082850182875af190506000519350806100f057600093505b50505092915050565b6000806020838503121561010c57600080fd5b823567ffffffffffffffff8082111561012457600080fd5b818501915085601f83011261013857600080fd5b81358181111561014757600080fd5b86602082850101111561015957600080fd5b60209290920196919550909350505050565b6000808585111561017b57600080fd5b8386111561018857600080fd5b5050820193919092039150565b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000081358181169160148510156101d55780818660140360031b1b83161692505b50509291505056fea2646970667358221220f4eeea3c52e568afe7af0cb6d22e9eba322f25189228e2d96485c8f1d485112464736f6c63430008170033"
