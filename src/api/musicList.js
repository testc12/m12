export function getHotData () {
	this.$http.get('/apis/hotdata/').then(res => {
		console.log((res.data.data))
		this.musicListDat = res.data.data
		return this.musicListDat
	})

}