package com.example.notifications

import android.app.Notification.VISIBILITY_PUBLIC
import android.os.Build
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.support.v4.app.NotificationCompat
import android.support.v4.app.NotificationManagerCompat
import kotlinx.android.synthetic.main.activity_main.*
import android.R.attr.name
import android.annotation.SuppressLint
import android.annotation.TargetApi
import android.app.Notification.VISIBILITY_PRIVATE
import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.support.annotation.RequiresApi


class MainActivity : AppCompatActivity() {

    val CHANNEL_ID = "CHANNEL_ID"


    @SuppressLint("NewApi")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        createNotificationChannel()

        default_notification_btn.setOnClickListener {
            createNormalNotification()
        }

        head_up_notification_btn.setOnClickListener {
            createHeadsUpNotification()
        }

        lock_screen_notification_btn.setOnClickListener {
            createLockScreenNotification()
        }
    }

    fun createNormalNotification(){
        val builder = NotificationCompat.Builder(this, CHANNEL_ID)
            .setSmallIcon(R.drawable.notification_icon)
            .setContentTitle("Normal Notification")
            .setContentText("Really great content for this notification")
            .setPriority(NotificationCompat.PRIORITY_DEFAULT)

        createNotification(0, builder)
    }

    fun createHeadsUpNotification(){
        val builder = NotificationCompat.Builder(this, CHANNEL_ID)
            .setSmallIcon(R.drawable.notification_icon)
            .setContentTitle("Heads up notification")
            .setContentText("Really great content for this notification")
            .setPriority(NotificationCompat.PRIORITY_HIGH)

        if (Build.VERSION.SDK_INT >= 21) builder.setVibrate(LongArray(0))

        createNotification(1, builder)
    }

    @RequiresApi(Build.VERSION_CODES.LOLLIPOP)
    fun createLockScreenNotification(){
        val publicBuilder = NotificationCompat.Builder(this, CHANNEL_ID)
            .setSmallIcon(R.drawable.notification_icon)
            .setContentTitle("Alternative notification")
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setVisibility(VISIBILITY_PUBLIC)

        val builder = NotificationCompat.Builder(this, CHANNEL_ID)
            .setSmallIcon(R.drawable.notification_icon)
            .setContentTitle("Lock screen Notification")
            .setContentText("Really great content for this notification")
            .setPriority(NotificationCompat.PRIORITY_DEFAULT)
            .setVisibility(VISIBILITY_PRIVATE)
            .setPublicVersion(publicBuilder.build())

        createNotification(0, builder)
    }

    fun createNotification(id: Int, builder: NotificationCompat.Builder){
        with(NotificationManagerCompat.from(this)) {
            notify(0, builder.build())
        }
    }

    private fun createNotificationChannel() {
        // Create the NotificationChannel, but only on API 26+ because
        // the NotificationChannel class is new and not in the support library
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val name = "Channel"
            val descriptionText = "Simple channel example"
            val importance = NotificationManager.IMPORTANCE_DEFAULT
            val channel = NotificationChannel(CHANNEL_ID, name, importance).apply {
                description = descriptionText
            }
            // Register the channel with the system
            val notificationManager: NotificationManager =
                getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            notificationManager.createNotificationChannel(channel)
        }
    }

}
