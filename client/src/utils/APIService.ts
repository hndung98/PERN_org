import WebService from './WebService';

export default class APIService {
    static urlServerAddress = 'http://localhost:5000';

    // For visitor
    static baseAPI = () => {
        return `${APIService.urlServerAddress}/api/`;
    };
    static apiQuestion = () => {
        return `${APIService.baseAPI()}question`;
    };

    static apiSignIn = () => {
        return `${APIService.baseAPI()}user/login`;
    };

    // For customer
    static apiCheckToken = () => {
        return `${APIService.baseAPI()}customer/users/check-token`;
    };

// For doctor


//////////////////////////////////////////////////////////////////////////////////////////

	// TODO: For visitor

	// Get Question
	static getQuestion(values: any, callback: any) {
		const formData = new FormData();
		formData.append('skip', values.skip);
		formData.append('take', values.take);
		formData.append('keyword', values.keyword);
		formData.append('specializedId', values.specializedId);
		WebService.sendJsonGET(
			this.apiQuestion(),
			{
				formData
			},
			callback,
		);
	}

  	// TODO: For customer

//====================CHECK-TOKEN AND SET NEW TOKEN======================

	static signIn(username: any, password: any, callback: any) {
		WebService.sendJsonPOST(
			this.apiSignIn(),
			{
				username,
				password,
			},
			callback,
		);
	}

    // // Put Doctor Operation
    // static putDoctorOperation(token, values, callback) {
	// 	const formData = new FormData();
	// 	if(values.addList){
	// 		values.addList.forEach((e, index) => {
	// 			formData.append(`addList[${index}]`, JSON.stringify(e));
	// 		});
	// 	}
	// 	if(values.updateList){
	// 		values.updateList.forEach((e, index) => {
	// 			formData.append(`updateList[${index}]`, JSON.stringify(e));
	// 		});
	// 	}
	// 	if(values.deleteList){
	// 		values.deleteList.forEach((e, index) => {
	// 			formData.append(`deleteList[${index}]`, JSON.stringify(e));
	// 		});
	// 	}
	// 	formData.append('id', values.id);
	// 	console.log(formData.get("id"));
    //     WebService.sendJsonPUT(
	// 		this.apiDoctorOperation(),
	// 		{
	// 			jwt: token,
	// 			formData
	// 		},
	// 		callback,
	// 	);
    // }

	// // Get Doctor Work Place
    // static getDoctorWorkPlaceManager(token, status, data, callback) {
	// 	let query = {}
	// 	if(data.skip){
	// 		query = {
	// 			...query,
	// 			skip: data.skip
	// 		}
	// 	}
	// 	if(data.take){
	// 		query = {
	// 			...query,
	// 			take: data.take
	// 		}
	// 	}
	// 	if(data.keyword){
	// 		query = {
	// 			...query,
	// 			keyword: data.keyword
	// 		}
	// 	}

    //     WebService.sendJsonGET(
	// 		this.apiDoctorWorkPlaceManager(),
	// 		{
	// 			jwt: token,
	// 			status,
	// 			...query
	// 		},
	// 		callback,
	// 	);
    // }

}