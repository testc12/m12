import * as types from './mutation-types'
const mutations = {
	[types.SET_SINGER] (state, singer) {
		state.singer = singer
	},
	[types.SET_PLAYING] (state, flag) {
		state.playList = flag
	},
	[types.SET_FULLSCREEN] (state, flag) {
		state.fullScreen = flag
	},
	[types.SET_PLAY_LIST] (state, list) {
		state.playList = list
	},
	[types.SET_SEQUEE_LIST] (state, sequeeList) {
		state.sequee = sequeeList
	},
	[types.SET_MODE] (state, mode) {
		state.mode = mode
	},
	[types.SET_CURRENT_INDEX] (state, index) {
		state.currentIndex = index
	},

}
export default mutations