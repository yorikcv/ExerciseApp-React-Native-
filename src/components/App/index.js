import {View, Text, Platform, Navigator, TouchableHighlight, I18nManager} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import DrawerLayoutAndroid from 'DrawerLayoutAndroid';
import TouchableOpacity from 'TouchableOpacity';
import {appStyles} from './styles';

import Iconz from 'react-native-vector-icons/Ionicons';

import Home from '../Home';
import Chapter from '../Chapter';
import Subject from '../Subject';
// import AddTodoItem from '../AddTodoItem';
// import { loadSubjects } from '../../state/subjects/actions';


class App extends Component {
    // componentDidMount() {
    //   this.props.dispatch(loadSubjects());
    // }

    NavigationBarHome = openDrawer => (
    {
        LeftButton(route, navigator, index, navState) {
            return (
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={openDrawer}>
                        <Iconz name="ios-search-outline" style={appStyles.navBarIcons}/>
                    </TouchableOpacity>
                    {(()=> {
                        switch (route.id) {
                            case  'chapter':
                            case  'subject':
                                return (
                                    <TouchableOpacity onPress={openDrawer}>
                                        <Iconz name="ios-information-circle-outline" style={appStyles.navBarIcons}/>
                                    </TouchableOpacity>
                                )
                        }
                    })()}
                </View>
            )
        },

        RightButton(route, navigator, index, navState) {
            return (
                <View>
                    {(() => {
                        switch (route.id) {
                            case  'chapter':
                            case  'subject':
                                return (
                                    <TouchableOpacity onPress={() => navigator.pop()}>
                                        <Iconz name="ios-arrow-forward" style={appStyles.navBarIcons}/>
                                    </TouchableOpacity>
                                );
                            default:
                                return (
                                    <TouchableOpacity onPress={openDrawer}>
                                        <Iconz name="ios-menu-outline" style={appStyles.navBarIcons}/>
                                    </TouchableOpacity>
                                )
                        }
                    })()}
                </View>
            )
        },

        Title(route, navigator, index, navState) {
            return (
                <View style={appStyles.navBarTitleContainer}>
                    <Text style={appStyles.navBarTitle}>
                        {route.title}
                    </Text>
                </View>
            )
        }
    }
    );

    constructor() {
        super();

        this.renderNavigation = this.renderNavigation.bind(this);
        this.openDrawer = this.openDrawer.bind(this);
    }

    openDrawer() {
        this.drawer.openDrawer();
    }


    renderScene(route, navigator) {
        switch (route.id) {
            case 'home':
                return (
                    <View style={appStyles.content}>
                        <Home navigator={navigator}/>
                        {/*<Text>{(I18nManager.isRTL)?'yep':'no'}</Text>*/}
                    </View>
                );
            case 'chapter':
                return (
                    <View style={appStyles.content}>
                        <Chapter navigator={navigator}/>
                    </View>
                );
            case 'subject':
                return (
                    <View style={appStyles.content}>
                        <Subject navigator={navigator}/>
                    </View>
                )
        }
    }

    renderNavigation() {
        return (
            <View style={appStyles.container}>
                <TouchableHighlight
                    onPress={() => {console.log('Login button press')}}
                    underlayColor={'#ccc'}>
                    <View style={appStyles.navigationMenuItem}>
                        <Text style={appStyles.label}>התחבר</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {console.log('Logout button press')}}
                    underlayColor={'#ccc'}>
                    <View style={appStyles.navigationMenuItem}>
                        <Text style={appStyles.label}>להתנתק</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

    render() {
        return (
            <View style={appStyles.container}>
                <DrawerLayoutAndroid
                    ref={(ref) => this.drawer = ref}
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Right}
                    renderNavigationView={this.renderNavigation}>
                    <View style={appStyles.container}>
                        <Navigator
                            ref="navigator"
                            configureScene={(route) => Navigator.SceneConfigs.FadeAndroid}
                            initialRoute={{
                                id: 'home',
                                title: 'האזור האישי'
                            }}
                            renderScene={this.renderScene.bind(this)}
                            navigationBar={
                                <Navigator.NavigationBar
                                    style={appStyles.navBar}
                                    routeMapper={this.NavigationBarHome(this.openDrawer)} />
                            }/>
                    </View>
                </DrawerLayoutAndroid>
            </View>
        );
    }
}

// App.propTypes = {
//   dispatch: React.PropTypes.func.isRequired,
// };

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

// export default connect(null, mapDispatchToProps)(App);

export default App;