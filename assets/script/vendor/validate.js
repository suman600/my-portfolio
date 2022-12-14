(function() {
    "use scrict"

    let select = (select) => document.getElementById(select);

    const contactName = select('contactName');
    const contactEmail = select('contactEmail');
    const contactSubject = select('contactSubject');
    const contactMessage = select('contactMessage');
    const contactForm = select('contactForm');
    const toastSuccess = select('formSuccess');


    formSubmit = () => {

        let isContactNameValid = checkUserName();
        let isContactEmailValid = checkUserEmail();
        let isContactSubjectValid = checkUserSubject();
        let isContactMessageValid = checkUserMessage();

        isContatFormValid = isContactNameValid && isContactEmailValid && isContactSubjectValid && isContactMessageValid;

        if (isContatFormValid) {
            showTost();
            formReset();
            return true;
        } else {
            return false
        }
    }

    // contactForm.addEventListener("", (event) => {

    // })

    const isRequired = value => value.length === 0 ? false : true;
    const isMinMax = (length, min, max) => length < min || length > max ? false : true;

    const isEmailValid = (email) => {

        const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,30})+$/;

        return regExp.test(email);
    }

    const showError = (input) => {
        input.classList.remove('valid');
        input.classList.add('in-valid');
    }

    const showSuccess = (input) => {
        input.classList.remove('in-valid');
        input.classList.add('valid');
    }

    //  user name check
    checkUserName = () => {
        let valid = false;
        let min = 2;
        let max = 30;

        let userName = contactName.value.trim();

        if (!isRequired(userName)) {
            showError(contactName);
        } else if (!isMinMax(userName.length, 2, 25)) {
            showError(contactName);
        } else {
            showSuccess(contactName);
            valid = true;
        }
        return valid;
    };

    // email check
    checkUserEmail = () => {
        let valid = false;

        let userEmail = contactEmail.value.trim();

        if (!isRequired(userEmail)) {
            showError(contactEmail);
        } else if (!isEmailValid(userEmail)) {
            showError(contactEmail);
        } else {
            showSuccess(contactEmail);
            valid = true;
        }
        return valid;
    };

    //  user subject check
    checkUserSubject = () => {
        let valid = false;
        let min = 2;
        let max = 30;

        let userSubject = contactSubject.value.trim();

        if (!isRequired(userSubject)) {
            showError(contactSubject);
        } else if (!isMinMax(userSubject.length, min, max)) {
            showError(contactSubject);
        } else {
            showSuccess(contactSubject);
            valid = true;
        }
        return valid;
    };

    //  user messege check
    checkUserMessage = () => {
        let valid = false;
        let min = 2;
        let max = 30;

        let userMessege = contactMessage.value.trim();

        if (!isRequired(userMessege)) {
            showError(contactMessage);
        } else if (!isMinMax(userMessege.length, min, max)) {
            showError(contactMessage);
        } else {
            showSuccess(contactMessage);
            valid = true;
        }
        return valid;
    };

    const debounce = (fn, deley = 500) => {
        let debounceTimer
        return (...args) => {
            if (debounceTimer) {
                clearTimeout(debounceTimer)
            }
            debounceTimer = setTimeout(() => {
                fn.apply(null, args)
            }, deley)
        }
    }

    formReset = () => {
        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = '';
    }

    showTost = () => {
        toastSuccess.classList.add('active');
        setTimeout(() => {
            toastSuccess.classList.remove('active');
        }, 2000);
    }

    contactForm.addEventListener('input', debounce(function(e) {
        switch (e.target.id) {
            case 'contactName':
                checkUserName();
                break;
            case 'contactEmail':
                checkUserEmail();
                break;
            case 'contactSubject':
                checkUserSubject();
                break;
            case 'contactMessage':
                checkUserMessage();
                break;
        }
    }))

})();