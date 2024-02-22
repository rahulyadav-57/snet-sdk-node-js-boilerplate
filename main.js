

import SnetSDK, { DefaultPaymentStrategy } from "snet-sdk";
import { config } from "./config.js";
import * as services from "./assets/example_grpc_pb.cjs";
import messages from "./assets/example_pb.cjs";

const paymentStrategy = new DefaultPaymentStrategy(4);

const FREE_CALL_TOKEN = process.env.FREE_CALL_TOKEN;

let tokenToMakeFreeCall = FREE_CALL_TOKEN
    ? FREE_CALL_TOKEN.toUpperCase()
    : "";
tokenToMakeFreeCall = Boolean(tokenToMakeFreeCall)
    ? tokenToMakeFreeCall.startsWith("0X")
        ? tokenToMakeFreeCall
        : `0X${tokenToMakeFreeCall}`
    : "";

const serviceClientOptions = {
    tokenToMakeFreeCall,
    tokenExpirationBlock: 19022870,
    email: process.env.EMAIL,
    disableBlockchainOperations: false,
    concurrency: true
};

const runService = async () => {
    const sdk = new SnetSDK.default(config);

    const client = await sdk.createServiceClient(
        "masp",
        "masp_s1",
        services.CalculatorClient,
        "default_groups",
        paymentStrategy,
        serviceClientOptions,
        4
    );

    const { concurrencyToken, channelId } = await client.getConcurrencyTokenAndChannelId();
    client.setConcurrencyTokenAndChannelId(concurrencyToken, channelId)
    const numbers = new messages.Numbers();
    numbers.setA(10);
    numbers.setB(20);
    client.service.add(numbers, (err, result) => {
        if (err) {
            console.error(`service failed with error ${err}`)
        } else {
            console.log(`service response is ${result}`)
        }
        process.exit(0);
    });
};

runService();
