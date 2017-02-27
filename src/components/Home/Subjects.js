import {View, Text, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';

import TouchableOpacity from 'TouchableOpacity';
import {subjectsStyles} from './styles';

import Iconz from 'react-native-vector-icons/Ionicons';

class Subjects extends Component {

    constructor() {
        super();

        this.renderItems = this.renderItems.bind(this);
        this.openQuestions = this.openQuestions.bind(this);
    }

    openQuestions(title) {
        this.props.navigator.push({
            id: 'chapter',
            title: title
        })
    }

    renderItems(items) {
        return (
            <View style={subjectsStyles.itemsWrapper}>
                {items.map(function (item, index) {
                    return (
                        <TouchableOpacity key={index} style={subjectsStyles.itemWrapper}
                                          onPress={() => {this.openQuestions(item.name)}}>
                            <Image source={{uri: item.imgUrl}} style={subjectsStyles.itemImg}/>
                            <Text style={subjectsStyles.itemText}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )
                }, this)}
            </View>
        )
    }

    render() {
        return (
            <View style={subjectsStyles.container}>
                <ScrollView>
                    <View style={subjectsStyles.title}>
                        <Text style={subjectsStyles.titleText}>הספרים שלי</Text>
                    </View>
                    {this.renderItems(this.props.items)}
                </ScrollView>
            </View>
        )
    }
}
;

export default Subjects;
