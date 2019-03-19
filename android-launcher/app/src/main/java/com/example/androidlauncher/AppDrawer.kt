package com.example.androidlauncher

import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.support.v7.widget.LinearLayoutManager
import android.support.v7.widget.RecyclerView
import android.widget.Adapter
import com.xwray.groupie.GroupAdapter
import com.xwray.groupie.ViewHolder
import kotlinx.android.synthetic.main.activity_app_drawer.*

class AppDrawer : AppCompatActivity() {

    private lateinit var appAdapter: GroupAdapter<ViewHolder>

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_app_drawer)
    }

    override fun onStart() {
        super.onStart()

        appAdapter  = GroupAdapter()

        app_recyclerview.apply {
            layoutManager = LinearLayoutManager(this@AppDrawer)
            adapter = appAdapter
        }


        val pm = packageManager

        val int = Intent(Intent.ACTION_MAIN, null)
        int.addCategory(Intent.CATEGORY_LAUNCHER)

        val allApps = pm.queryIntentActivities(int, 0)
        for (i in allApps) {
            val app = AppInformations(i.loadLabel(pm).toString(), i.activityInfo.packageName, i.activityInfo.loadIcon(pm))
            val appItem = AppItem(app, this)
            appAdapter.add(appItem)
        }
    }
}
