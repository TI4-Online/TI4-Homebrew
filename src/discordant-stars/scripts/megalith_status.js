let status = true;

function getMegalithStatus() {
  return status;
}

function setMegalithStatus(s) {
    if (typeof s === "boolean") {
        status = s;
    };

}

function toggleMegalithStatus() {
       status = !status;
}

module.exports = {
    getMegalithStatus,
    setMegalithStatus,
    toggleMegalithStatus
}