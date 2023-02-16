let status = true;

function getBlightStatus() {
  return status;
}

function setBlightStatus(s) {
    if (typeof s === "boolean") {
        status = s;
    };

}

function toggleBlightStatus() {
       status = !status;
}

module.exports = {
    getBlightStatus,
    setBlightStatus,
    toggleBlightStatus
}