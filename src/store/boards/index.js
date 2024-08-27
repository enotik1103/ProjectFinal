import axios from "axios";
import {token, userId} from "@/axios.js";

const boardsStore = {
    namespaced: true,
    state: {
        boards: [],
    },

    getters: {
        getBoards(state) {
            return state.boards;
        },
        
        getBoardById: (state) => (boardId) => {
            return state.boards.find(b => Number(b.id) === Number(boardId));
        }
    },
    mutations: {
        setBoards(state, value) {
            state.boards = value;
        },

        addBoard(state, value) {
            state.boards.push(value);
        }


    },
    actions: {
        async initBoards({ commit }) {
            try {
                const response = await axios.get(`https://todo-list.edu-playground.ru/api/v1/user/${userId}/boards`, {
                    headers: {
                        'X-Base-Auth': token
                    }
                });

                commit('setBoards', response?.data);
            } catch (e) {
                console.log(e);
            }

        },
        //
       
        async addBoard(store, boardData){
            try {
                const response = await axios.post(`https://todo-list.edu-playground.ru/api/v1/user/${userId}/boards`, boardData, {
                    headers: {
                        'X-Base-Auth': token
                    }
                });

                if (response) {
                    await boardsStore.actions.initBoards(store);
                }
            } catch (e) {
                console.log(e);
            }

            },

        async editBoard(store, boardData){
            const boardId = boardData.formData.id;

            delete boardData.formData.id;

            try {
                const response = await axios.put(`https://todo-list.edu-playground.ru/api/v1/user/${userId}/boards/${boardId}`, boardData, {
                    headers: {
                        'X-Base-Auth': token
                    }
                });
                if (response) {
                    await boardsStore.actions.initBoards(store);
                }

            } catch (e) {
                console.log(e);
            }
            }
        }
}

export default boardsStore;