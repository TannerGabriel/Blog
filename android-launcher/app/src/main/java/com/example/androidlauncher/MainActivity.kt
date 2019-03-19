package com.example.androidlauncher

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.content.Intent
import android.content.ComponentName
import android.content.Context
import android.graphics.drawable.Drawable
import kotlinx.android.synthetic.main.activity_main.*


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        app_drawer_button.setOnClickListener {
            val launchIntent = Intent(this, AppDrawer::class.java)
            startActivity(launchIntent)
        }
    }

}
