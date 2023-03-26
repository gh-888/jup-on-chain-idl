import { Program, BorshCoder } from '@coral-xyz/anchor';
import { Connection  } from '@solana/web3.js';

const JUPITER_PROGRAM_ID = 'JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB';

(async () => {
    const connection = new Connection('https://api.mainnet-beta.solana.com');
    const idl = await Program.fetchIdl(JUPITER_PROGRAM_ID, { connection });
    new BorshCoder(idl!);
})();