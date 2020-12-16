import React, { useEffect } from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Animated
} from 'react-native'
import { icons, COLORS, SIZES, FONTS } from '../constant'


const Restaurant = ({ route, navigation }) => {


    const [restaurant, setRestaurant] = React.useState(null);
    const [currentLocation, setCurrentLocation] = React.useState(null);


    React.useEffect(() => {
        let { item, currentLocation } = route.params;

        setRestaurant(item);
        setCurrentLocation(currentLocation);
    })


    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                {/* Restaurant Name Section */}
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray3
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{restaurant?.name}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.list}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderFoodInfo() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
            >
                {
                    restaurant?.menu.map((item, index) => (
                        <View
                            key={`menu-${index}`}
                            style={{
                                alignItems: 'center'
                            }}>
                            <View style={{
                                height: SIZES.height * 0.35
                            }}>
                                <Image
                                    source={item.photo}
                                    resizeMode="cover"
                                    style={{
                                        width: SIZES.width,
                                        height: "100%"
                                    }}
                                />


                                {/* quantity */}
                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: - 20,
                                        width: SIZES.width,
                                        height: 50,
                                        justifyContent: 'center',
                                        flexDirection: 'row'
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            width: 50,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderTopLeftRadius: 25,
                                            borderBottomLeftRadius: 25
                                        }}
                                    >
                                        <Text style={{ ...FONTS.body1 }}>-</Text>
                                    </TouchableOpacity>

                                    <View
                                        style={{
                                            width: 50,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Text style={{ ...FONTS.h2 }}>5</Text>

                                    </View>

                                    <TouchableOpacity style={{
                                        width: 50,
                                        backgroundColor: COLORS.white,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderTopRightRadius: 25,
                                        borderBottomRightRadius: 25,
                                    }}>
                                        <Text style={{ ...FONTS.body1 }}>-</Text>
                                    </TouchableOpacity>

                                </View>

                            </View>


                            {/* body description */}
                            <View style={{
                                width: SIZES.width,
                                alignItems: 'center',
                                marginTop: 15,
                                paddingHorizontal: SIZES.padding * 2
                            }}>
                                <Text style={{
                                    marginVertical: 10,
                                    textAlign: 'center',
                                    ...FONTS.h2,
                                }}>{item.name}</Text>

                                <Text style={{
                                    textAlign: 'center',
                                    ...FONTS.body3
                                }}>{item.description}</Text>
                            </View>



                            {/* calories */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 10,
                                }}
                            >
                                <Image
                                    source={icons.fire}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginRight: 10,
                                    }}
                                />
                                <Text
                                    style={{
                                        ...FONTS.body3,
                                        color: COLORS.darkgray,
                                    }}
                                >{item.calories.toFixed(2)} cal</Text>
                            </View>


                        </View>
                    ))
                }
            </Animated.ScrollView>
        )
    }


    return (
        <SafeAreaView>
            {renderHeader()}
            {renderFoodInfo()}
        </SafeAreaView>
    )
}

export default Restaurant

const styles = StyleSheet.create({})
