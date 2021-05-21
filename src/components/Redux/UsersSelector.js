

export const Users2 = (state) => {
 return state.userPage.Users
}

export const PageSize = (state) => {
    return state.userPage.pageSize
}

export const TotalUsers = (state) => {
    return state.userPage.totalUsers
}

export const ISFetching = (state) => {
    return state.userPage.isFetching
}

export const GetUsers = (state) => {
    return state.getUsers
}
export const ISAuth = (state) => {
    return state.auth.isAuth
}
