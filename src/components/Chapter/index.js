import {View, Text, Image, ScrollView, ListView, TouchableHighlight, ActivityIndicator} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import IconFA from 'react-native-vector-icons/FontAwesome';
import {chapterStyles} from './styles';

import {loadSubjects} from '../../state/chapter/actions';

const chapter = require('../../jsons/chapter.json');

class Chapter extends Component {
    componentDidMount() {
        this.props.loadSubjects(chapter);
    }

    constructor() {
        super();

        this.renderRow = this.renderRow.bind(this);
        this.openQuestions = this.openQuestions.bind(this);
    }

    openQuestions() {
        this.props.navigator.push({
            id: 'subject',
            title: 'חש הַחֲזָקִים',
        })
    }

    renderRow(row) {
        return (
            <View style={chapterStyles.itemWrapper}>
                <TouchableHighlight underlayColor="rgba(147, 70, 231, 0.2)" activeOpacity={1}
                                    onPress={this.openQuestions} style={{flex: 1}}>
                    <View style={chapterStyles.item}>
                        <View style={chapterStyles.imgWrapper}>
                            <IconFA name="book" style={chapterStyles.itemIcon}/>
                        </View>
                        <View style={chapterStyles.numberOfQuestionWrapper}>
                            <Text style={chapterStyles.numberOfQuestion}>
                                {row.correctQuestion}/{row.numberOfQuestion}
                            </Text>
                        </View>
                        <View style={chapterStyles.scoreWrapper}>
                            <Text style={chapterStyles.score}>
                                {row.score}
                            </Text>
                        </View>
                        <View style={chapterStyles.nameWrapper}>
                            <Text style={chapterStyles.itemText} ellipsizeMode={'tail'} numberOfLines={2}>
                                {row.title}
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }

    renderList() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        return (
            <ListView dataSource={ds.cloneWithRows(this.props.subjects)}
                      renderRow={this.renderRow}/>
        );
    }

    render() {
        return (
            <View style={chapterStyles.container}>
                {(this.props.isLoading) ?
                    <View style={chapterStyles.spinnerWrap}>
                        <ActivityIndicator size="large"/>
                    </View>
                    :
                    <ScrollView style={chapterStyles.itemsWrapper}>
                        {this.renderList()}
                    </ScrollView>
                }
            </View>
        );
    }
}

Chapter.propTypes = {
    navigator: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    const chapter = state.get('chapter');
    return {
        isLoading: chapter.get('isLoading'),
        title: chapter.get('title'),
        subjects: chapter.get('subjects'),
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loadSubjects,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Chapter);

