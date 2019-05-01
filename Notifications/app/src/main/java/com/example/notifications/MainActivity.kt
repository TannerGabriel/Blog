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
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.graphics.BitmapFactory
import android.os.HandlerThread
import android.support.annotation.RequiresApi
import android.widget.RemoteViews


class MainActivity : AppCompatActivity() {

    private val CHANNEL_ID = "CHANNEL_ID"

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

        notification_badged.setOnClickListener {
            createBadgedNotification()
        }

        notification_click_action_btn.setOnClickListener {
            createNotificationWithClickAction()
        }

        notification_action_button_btn.setOnClickListener {
            createNotificationWithActionButtons()
        }

        expandable_notification.setOnClickListener {
            createExpandableNotification()
        }

        progress_bar_notification.setOnClickListener {
            createProgressBarNotification()
        }

        group_notification.setOnClickListener {
            createGroupNotification()
        }

        custom_notification.setOnClickListener {
            createCustomNotification()
        }
    }

    // Creates a standard notification
    fun createNormalNotification(){
        val builder = NotificationCompat.Builder(this, CHANNEL_ID)
            .setSmallIcon(R.drawable.notification_icon)
            .setContentTitle("Normal Notification")
            .setContentText("Really great content for this notification")
            .setPriority(NotificationCompat.PRIORITY_DEFAULT)

        createNotification(0, builder)
    }

    // Creates a headup notification
    fun createHeadsUpNotification(){
        val builder = NotificationCompat.Builder(this, CHANNEL_ID)
            .setSmallIcon(R.drawable.notification_icon)
            .setContentTitle("Heads up notification")
            .setContentText("Really great content for this notification")
            .setPriority(NotificationCompat.PRIORITY_HIGH)

        if (Build.VERSION.SDK_INT >= 21) builder.setVibrate(LongArray(0))

        createNotification(1, builder)
    }

    // Create a notification which will be visible on the lockscreen
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

        createNotification(2, builder)
    }

    // Create a notification which shows a badged on newer android versions
    fun createBadgedNotification(){
        val builder = NotificationCompat.Builder(this@MainActivity, CHANNEL_ID)
            .setContentTitle("Badged Notification")
            .setContentText("New badged notification")
            .setSmallIcon(R.drawable.notification_icon)
            .setBadgeIconType(NotificationCompat.BADGE_ICON_SMALL)

        createNotification(3, builder)
    }

    // Create a notification with a click event
    fun createNotificationWithClickAction(){
        val intent = Intent(this, MainActivity::class.java).apply {
            flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
        }

        val pendingIntent: PendingIntent = PendingIntent.getActivity(this, 0, intent, 0)

        val builder = NotificationCompat.Builder(this@MainActivity, CHANNEL_ID)
            .setContentTitle("Notification with click action")
            .setContentText("New notification with great click action")
            .setSmallIcon(R.drawable.notification_icon)
            .setBadgeIconType(NotificationCompat.BADGE_ICON_SMALL)
            .setContentIntent(pendingIntent)
            .setAutoCancel(true)

        createNotification(4, builder)
    }

    // Create a notification with an action button
    fun createNotificationWithActionButtons(){
        val intent = Intent(this, MainActivity::class.java).apply {
            flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
        }

        val pendingIntent: PendingIntent = PendingIntent.getActivity(this, 0, intent, 0)

        val builder = NotificationCompat.Builder(this@MainActivity, CHANNEL_ID)
            .setContentTitle("Notification with click action")
            .setContentText("New notification with great click action")
            .setSmallIcon(R.drawable.notification_icon)
            .setBadgeIconType(NotificationCompat.BADGE_ICON_SMALL)
            .addAction(R.drawable.notification_icon, "Open Activity",
                pendingIntent)

        createNotification(5, builder)
    }

    // Create a notification that can be expanded for more information
    fun createExpandableNotification(){
        val bitmap = BitmapFactory.decodeResource(resources, R.drawable.notification_icon)

        val builder = NotificationCompat.Builder(this, CHANNEL_ID)
            .setSmallIcon(R.drawable.notification_icon)
            .setContentTitle("Simple expandable notification")
            .setContentText("Simple notification that can be expended ")
            .setLargeIcon(bitmap)
            .setStyle(NotificationCompat.BigPictureStyle()
                .bigPicture(bitmap)
                .bigLargeIcon(null))

        /* Add large text
        .setStyle(NotificationCompat.BigTextStyle()
                .bigText("Some great big text")
         */

        createNotification(6, builder)
    }

    // Create a notification with a simple progress bar
    fun createProgressBarNotification(){
        val builder = NotificationCompat.Builder(this, CHANNEL_ID)
            .setSmallIcon(R.drawable.notification_icon)
            .setContentTitle("Simple progress bar notification")
            .setContentText("Simple notification with a progress bar ")

        // Progress values
        val PROGRESS_MAX = 100
        val PROGRESS_CURRENT = 0

        NotificationManagerCompat.from(this).apply {
            // Sets the initial progress to 0
            builder.setProgress(PROGRESS_MAX, PROGRESS_CURRENT, false)
            notify(7 , builder.build())

            for(i in 0 until 100){
                builder.setProgress(PROGRESS_MAX, i, false)
                HandlerThread.sleep(100)
            }

            // Updates the notification when the progress is done
            builder.setContentText("Download complete")
                .setProgress(0, 0, false)
            notify(7, builder.build())
        }
    }

    val GROUP_KEY = "com.android.example.KEY"

    // Create a simple group notification
    fun createGroupNotification(){
        val groupBuilderOne = NotificationCompat.Builder(this@MainActivity, CHANNEL_ID)
            .setSmallIcon(R.drawable.notification_icon)
            .setContentTitle("Simple group notification")
            .setContentText("Simple notification group")
            .setGroup(GROUP_KEY)

        val groupBuilderTwo = NotificationCompat.Builder(this@MainActivity, CHANNEL_ID)
            .setSmallIcon(R.drawable.notification_icon)
            .setContentTitle("Second simple group notification")
            .setContentText("Simple notification group")
            .setGroup(GROUP_KEY)

        // For older versions than 7.0
        val summaryNotification = NotificationCompat.Builder(this@MainActivity, CHANNEL_ID)
            .setContentTitle("Notification group summary")
            .setContentText("Notification group summary")
            .setSmallIcon(R.drawable.notification_icon)
            .setGroup(GROUP_KEY)
            .setGroupSummary(true)


        createNotification(8, groupBuilderOne)
        createNotification(9, groupBuilderTwo)
        createNotification(10, summaryNotification)
    }

    fun createCustomNotification(){
        // Get the layouts to use in the custom notification
        val notificationLayout = RemoteViews(packageName, R.layout.custom_notification_layout)
        val notificationLayoutExpanded = RemoteViews(packageName, R.layout.custom_notification_expended_layout)

        notificationLayout.setTextViewText(R.id.notification_title, "Title")
        notificationLayout.setTextViewText(R.id.notification_info, "Expand for more information")

        // Apply the layouts to the notification
        val customNotification = NotificationCompat.Builder(this, CHANNEL_ID)
            .setSmallIcon(R.drawable.notification_icon)
            .setStyle(NotificationCompat.DecoratedCustomViewStyle())
            .setCustomContentView(notificationLayout)
            .setCustomBigContentView(notificationLayoutExpanded)

        createNotification(11, customNotification)
    }

    // Creates the notification and displays it
    fun createNotification(id: Int, builder: NotificationCompat.Builder){
        with(NotificationManagerCompat.from(this)) {
            notify(id, builder.build())
        }
    }

    // Create the notification channel
    private fun createNotificationChannel() {
        // Create the NotificationChannel, but only on API 26+ because
        // the NotificationChannel class is new and not in the support library
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val name = "Channel"
            val descriptionText = "Simple channel example"
            val importance = NotificationManager.IMPORTANCE_DEFAULT
            val channel = NotificationChannel(CHANNEL_ID, name, importance).apply {
                description = descriptionText
                //setShowBadge(false)
            }
            // Register the channel with the system
            val notificationManager: NotificationManager =
                getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            notificationManager.createNotificationChannel(channel)
        }
    }

}
