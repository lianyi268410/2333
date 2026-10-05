

- ************************************/

if ($response.body) {
let obj = JSON.parse($response.body);
obj.subscriptions = [{
"active": true,
"product": "BBG",
"provider": "ZUORA",
"id": "88888888",
"subscriptionNumber": "88888888",
"status": "ACTIVE",
"endDate": "2099-12-31",
"startDate": "2024-01-01T00:00:00",
"entitlements": [{
"product": "BBG",
"type": "DIGITAL"
}],
"type": "DIGITAL"
}];
$done({ body: JSON.stringify(obj) });
} else {
$done({});
}
