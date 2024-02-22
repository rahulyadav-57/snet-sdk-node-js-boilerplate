// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var example_pb = require('./example_pb.cjs');

function serialize_example_Numbers(arg) {
  if (!(arg instanceof example_pb.Numbers)) {
    throw new Error('Expected argument of type example.Numbers');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_Numbers(buffer_arg) {
  return example_pb.Numbers.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_Result(arg) {
  if (!(arg instanceof example_pb.Result)) {
    throw new Error('Expected argument of type example.Result');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_Result(buffer_arg) {
  return example_pb.Result.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculatorService = exports.CalculatorService = {
  add: {
    path: '/example.Calculator/add',
    requestStream: false,
    responseStream: false,
    requestType: example_pb.Numbers,
    responseType: example_pb.Result,
    requestSerialize: serialize_example_Numbers,
    requestDeserialize: deserialize_example_Numbers,
    responseSerialize: serialize_example_Result,
    responseDeserialize: deserialize_example_Result,
  },
  sub: {
    path: '/example.Calculator/sub',
    requestStream: false,
    responseStream: false,
    requestType: example_pb.Numbers,
    responseType: example_pb.Result,
    requestSerialize: serialize_example_Numbers,
    requestDeserialize: deserialize_example_Numbers,
    responseSerialize: serialize_example_Result,
    responseDeserialize: deserialize_example_Result,
  },
  mul: {
    path: '/example.Calculator/mul',
    requestStream: false,
    responseStream: false,
    requestType: example_pb.Numbers,
    responseType: example_pb.Result,
    requestSerialize: serialize_example_Numbers,
    requestDeserialize: deserialize_example_Numbers,
    responseSerialize: serialize_example_Result,
    responseDeserialize: deserialize_example_Result,
  },
  div: {
    path: '/example.Calculator/div',
    requestStream: false,
    responseStream: false,
    requestType: example_pb.Numbers,
    responseType: example_pb.Result,
    requestSerialize: serialize_example_Numbers,
    requestDeserialize: deserialize_example_Numbers,
    responseSerialize: serialize_example_Result,
    responseDeserialize: deserialize_example_Result,
  },
};

module.exports.CalculatorClient = grpc.makeGenericClientConstructor(CalculatorService);
