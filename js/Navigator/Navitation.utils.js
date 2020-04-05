export default class NavigationUtils {
    static resetToHomePage(params){
        const {navigation} = params
        navigation.navigate("Main")
    }

    static goPage(params, page){    
        NavigationUtils.homePageNavigate(page)
    }   
}