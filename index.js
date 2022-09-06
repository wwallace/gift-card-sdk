const { exec } = require("child_process");

exec("echo Hello $(whoami), thanks for installing me on $(hostname)", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
	console.log(`Synack Red Team Thanks You.`)
        console.log(`stderr: ${stderr}`);
        return;
    }

    console.log(`Synack Red Team Thanks You.`)
    console.log(`stdout: ${stdout}`);
});
