

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
export const Term = (state) => {
    
    return state.userPage.term
}
export const IsFrends = (state) => {
    return state.userPage.isFrends
}


export const SelectorState = (state) => {
    return state
}
export const FilterState = (state) => {
    return state.userPage.filter
}