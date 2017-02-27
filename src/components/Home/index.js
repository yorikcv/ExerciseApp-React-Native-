import {View, Text, Image, ScrollView, ActivityIndicator} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {commonStyles} from '../App/styles';
import {homeStyles} from './styles';

import {loadChapters} from '../../state/home/actions';

import AccountPanel from './AccountPanel';
import Subjects from './Subjects';

const home = require('../../jsons/home.json');

let accountInfo = {
    userName: 'חודשית',
    userImgUrl: 'http://www.freelanceme.net/Images/default%20profile%20picture.png',
    messageText: 'נָה חודשית מיהו'
};

class Home extends Component {
    componentDidMount() {
      this.props.loadChapters(home);
    }

    render() {
        return (
            <View style={homeStyles.container}>
                <AccountPanel userName={accountInfo.userName} userImgUrl={accountInfo.userImgUrl}
                              messageText={accountInfo.messageText}/>
                {(this.props.isLoading) ?
                    <View style={commonStyles.spinnerWrap}>
                        <ActivityIndicator size="large"/>
                    </View>
                    :
                    <Subjects items={this.props.chapters} navigator={this.props.navigator}/>
                }
            </View>
        );
    }
}

Home.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    const home = state.get('home');
    return {
        isLoading: home.get('isLoading'),
        chapters: home.get('chapters'),
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loadChapters,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);