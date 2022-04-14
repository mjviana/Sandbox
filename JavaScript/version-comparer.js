
let version = "Version 1.4.55.9";
let minimumVersion = "";

console.log("Version: ", version);
console.log("Minimum Version: ", minimumVersion);
console.log("Is valid? ", isValidVersion(minimumVersion, version))

function isValidVersion() {

    let isValid = false;

    if (minimumVersion.trim() !== '' && version.trim() !== '') {

        let pattern = /(\d+(\.\d+)+)$/;

        if (pattern.test(minimumVersion) && pattern.test(version)) {

            let matchedMinimumVersion = minimumVersion.match(pattern);
            let matchedVersion = version.match(pattern);
            let minimumVersionString = matchedMinimumVersion[0];
            let versionString = matchedVersion[0];

            let minimumVersionArray = minimumVersionString.split('.');
            let versionArray = versionString.split('.');

            let versionArraySize = versionArray.length;
            let minimumVersionArraySize = minimumVersionArray.length;

            let arrayLengthDiff = versionArraySize - minimumVersionArraySize;
            let size = 0;
            if (arrayLengthDiff >= 0)
                size = versionArraySize
            else
                size = minimumVersionArraySize

            for (i = 0; i < size; i++) {

                let minimumValue = parseInt(minimumVersionArray[i]);
                let valueToCompare = parseInt(versionArray[i]);

                if (isNaN(valueToCompare))
                    valueToCompare = 0
                if (isNaN(minimumValue))
                    minimumValue = 0

                if ((valueToCompare - minimumValue) > 0) {
                    isValid = true;
                    break;
                }
                if ((valueToCompare - minimumValue) == 0) {
                    isValid = true;
                }
                if ((valueToCompare - minimumValue) < 0) {
                    isValid = false;
                    break;
                }
            }
        }
        return isValid;
    }
    return isValid;
}

