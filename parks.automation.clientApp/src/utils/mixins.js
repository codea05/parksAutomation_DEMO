export function openModal(elementId) {
	let element = document.getElementById(elementId)
	if (element) element.style.display = 'block'
}

export function closeModal(elementId) {
	let element = document.getElementById(elementId)
	if (element) element.style.display = 'none'
}

export function deepTrim(obj) {
	for (var prop in obj) {
		var value = obj[prop],
			type = typeof value
		if (value != null && (type == 'string' || type == 'object') && obj.hasOwnProperty(prop)) {
			if (type == 'object') {
				deepTrim(obj[prop])
			} else {
				obj[prop] = obj[prop].trim()
			}
		}
	}
}
