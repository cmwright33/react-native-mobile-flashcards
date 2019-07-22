import React from 'react'
import { View, StyleSheet, AsyncStorage } from 'react-native'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'


const DECK_NOTIFICATION_KEY = 'reactFlashCards:decks'


function createNotification () {
  return {
    title: 'Remember to tale a Quiz!',
    body: "You need to keep up on your flash cards!",
    ios: {
      sound: false,
    },
    android: {
      sound: false,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}


export function clearLocalNotification () {
  return AsyncStorage.removeItem(DECK_NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}


export function setLocalNotification () {
  AsyncStorage.getItem(DECK_NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(10)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(DECK_NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}